import React from 'react';

interface IContentProps {
  name: string;
  code: string;
}
const Content = ({ name, code }: IContentProps) => {
  return (
    <span>
      {name} <br /> - <br /> {code}
    </span>
  );
};

export default Content;
