import React from 'react';
import LayoutBlock from '../LayoutBlock';

type LAYOUT_BLOCKS_DIRECTIONS = 'horizontal' | 'vertical';

type LayoutBlockProps = {
  direction: 'horizontal' | 'vertical';
  outerStyle?: object | undefined;
  children?: React.Element | string | undefined;
};

const getLayoutDirection = (direction?: LAYOUT_BLOCKS_DIRECTIONS) => {
  if (direction === 'horizontal') {
    return 'row';
  }

  if (direction === 'vertical') {
    return 'column';
  }
};

export default function LayoutBlocks({
  direction = 'horizontal',
  outerStyle,
  children,
}: LayoutBlockProps) {
  return (
    <div
      style={{
        ...outerStyle,
        display: 'flex',
        flexDirection: getLayoutDirection(direction),
      }}
    >
      {children}
    </div>
  );
}
