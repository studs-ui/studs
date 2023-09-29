import React from 'react';

interface SampleColorProps {
  type: 'circle' | 'rectangle';
  width?: string;
  height?: string;
  background?: string;
  children?: React.ReactNode;
}

export default function SampleColor({
  type,
  width,
  height,
  background,
  children,
}: SampleColorProps): JSX.Element {
  let css: React.CSSProperties = {
    background,
    width,
    height,
    position: 'relative',
  };

  if (type == 'circle') {
    css = {
      ...css,
      borderRadius: '50%',
      width: width || '40px',
      height: height || '40px',
    };
  }

  if (type == 'rectangle') {
    css = {
      ...css,
      width: width || '150px',
      height: height || '50px',
    };
  }

  return <div style={css}>{children}</div>;
}
