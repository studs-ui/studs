import CodeBlock from '@theme/CodeBlock';
import Playground from '@theme/Playground';
import ReactLiveScope from '@theme/ReactLiveScope';
import React from 'react';

interface CodeBlocksProps {
  html: string;
  jsx?: string;
  preview?: boolean;
}

export default function CodeBlocks({
  preview,
  html,
  jsx,
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
