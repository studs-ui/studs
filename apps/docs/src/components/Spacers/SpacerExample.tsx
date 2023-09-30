import React from 'react';

interface ISpacerProps {
  number: number;
  fontSize?: number;
}
const SpacerExample = ({ number, fontSize }: ISpacerProps) => {
  return (
    <div
      style={{
        position: 'relative',
        width: `${number}px`,
        height: `${number}px`,
        backgroundColor: '#8A3FFC',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: number < 24 ? 'center' : 'flex-start',
          alignItems: number < 24 ? 'center' : 'normal',
          padding: number < 24 ? 0 : ' 0.1rem 0.25rem',
          height: '100%',
          color: 'white',
          fontSize: `${fontSize}px`,
          fontWeight: 600,
        }}
      >
        {number < 8 ? null : number}
      </div>
    </div>
  );
};

export default SpacerExample;
