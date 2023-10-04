import React from 'react';
import styles from './styles.module.css';
import ObjectStyleTable from '../../ObjectStyleTable';

export default function BorderTable(props): JSX.Element {
  const { data } = props;

  const roundingData = [
    {
      title: 'Default Border',
      content: '1px',
      imageContent: <div style={{background: 'black', width: 109, height: 1}}></div>,
      image: '/img/border1.svg',
      context: "The 1 px border is the most common border width in STUDS. This is either used as a typical border (e.g., text fields, tags, popovers) or a divider (e.g., tables, small dividers)."
    },
    {
      title: 'Medium Border',
      content: '2px',
      imageContent: <div style={{background: 'black', width: 109, height: 2}}></div>,
      image: '/img/secondimg.svg',
      context: "The 2 px stroke emphasizes weight and is used less frequently. This is used as a typical border (e.g., basic buttons), a divider (e.g., medium dividers), or in components that are built primarily out of border width (e.g., sliders or tabs)."
    },
    {
      title: 'Large Border',
      content: '4px',
      imageContent:<div style={{background: 'black', width: 109, height: 4}}></div>,
      image: '/img/thirdimg.svg',
      context: "The 4 px border width is reserved for only large dividers."
    },
  ];

  return (
   <ObjectStyleTable data={roundingData} />
  );
}
