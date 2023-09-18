import { FIGMA_EMBED_URL, FIGMA_URL_REGEX } from '@site/src/utils/constants';
import CodeBlock from '@theme/CodeBlock';
import Playground from '@theme/Playground';
import ReactLiveScope from '@theme/ReactLiveScope';
import React from 'react';

interface CodeBlocksProps {
  html: string;
  jsx?: string;
  preview?: boolean;
  figmaUrl?: string;
}

export default function CodeBlocks({
  preview,
  html,
  jsx,
  figmaUrl,
}: CodeBlocksProps): JSX.Element {
  const tabs = [
    {
      label: 'HTML',
      children: (
        <CodeBlock language="html" showLineNumbers>
          {html}
        </CodeBlock>
      ),
    },
  ];

  if (jsx?.trim()) {
    tabs.push({
      label: 'JSX',
      children: (
        <CodeBlock language="jsx" showLineNumbers>
          {jsx}
        </CodeBlock>
      ),
    });
  }

  tabs.push({
    label: 'Live Editor',
    children: <Playground scope={ReactLiveScope} children={html} />,
  });

  if (figmaUrl) {
    const _figmaUrl = `${FIGMA_EMBED_URL}${figmaUrl}`;
    const isValidFigmaUrl = figmaUrl.match(FIGMA_URL_REGEX);
    tabs.push({
      label: 'Figma',
      children: isValidFigmaUrl ? (
        <iframe
          style={{ height: '70vh', maxHeight: '600px' }}
          height="100%"
          width="100%"
          src={_figmaUrl}
          allowFullScreen
        />
      ) : (
        <>
          <code>Invalid Figma URL: {figmaUrl}</code>
        </>
      ),
    });
  }

  if (!html) {
    return (
      <>
        Error: Property <code>html</code> is undefined
        <br />
        Example: &nbsp;
        <code>{`<codeBlocks html="<div>Example code block</div>" />`}</code>
      </>
    );
  }

  return (
    <>
      {preview && <div dangerouslySetInnerHTML={{ __html: html }}></div>}
      <studs-tabs tabdirection="row">
        {tabs.map((tab, i) => (
          <React.Fragment key={i}>
            <button slot="tab">{tab.label}</button>
            <section slot="panel">{tab.children}</section>
          </React.Fragment>
        ))}
      </studs-tabs>
    </>
  );
}
