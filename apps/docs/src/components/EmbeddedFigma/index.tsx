import { FIGMA_EMBED_URL, FIGMA_URL_REGEX } from '@site/src/utils/constants';
import React from 'react';

interface EmbeddedFigmaProps {
  figmaUrl?: string;
}

export default function EmbeddedFigma({
  figmaUrl,
  ...rest
}: EmbeddedFigmaProps): JSX.Element {
  if (!figmaUrl) return <></>;

  const _figmaUrl = `${FIGMA_EMBED_URL}${figmaUrl}`;
  const isValidFigmaUrl = figmaUrl.match(FIGMA_URL_REGEX);

  if (!isValidFigmaUrl) return <code>Invalid Figma URL: {figmaUrl}</code>;

  return (
    <iframe
      style={{ height: '50vh', maxHeight: '400px' }}
      height="100%"
      width="100%"
      src={_figmaUrl}
      allowFullScreen
      {...rest}
    />
  );
}
