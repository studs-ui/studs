import React from 'react';

type BLOCK_SIZES =
  | '10'
  | '12'
  | '14'
  | '16'
  | '18'
  | '20'
  | '22'
  | '24'
  | '32'
  | '48'
  | '64'
  | '108'
  | '128';

type LayoutBlockProps = {
  size?: BLOCK_SIZES | string | undefined;
  children?: JSX.Element | React.Element | string | undefined;
  outerStyle?: object | undefined;
};

const DEFAULT_SIZE = '32';

export default function LayoutBlock({
  size = DEFAULT_SIZE,
  children,
  outerStyle,
}: LayoutBlockProps) {
  return (
    <div
      style={{
        ...outerStyle,
        width: size + 'px',
        height: size + 'px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#1890FF',
        backgroundColor: '#E5F7FF',
        border: 'dashed 1px #1890FF',
        fontSize: '10px',
      }}
    >
      {children ||
        `◇
      Swap`}
    </div>
  );
}
