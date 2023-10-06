import React from 'react';
import styles from './styles.module.scss';
import ObjectStyleTable from '../../ObjectStyleTable';

export default function RoundingTable(props): JSX.Element {
  const { data } = props;

  const roundingData = [
    {
      title: 'Default Rounding',
      content: '0.25 REM / 4 px',
      imageContent: <div style={{background: '#757575', width: 100, height: 75, borderRadius: 4, marginTop: "-32px"}}></div>,
      image: '/img/firstimg.svg',
      context: "This is the rounding used by the majority of STUDS components. The corner radius maintains it’s sizing on each screen."
    },
    {
      title: 'Small Rounding',
      content: '0.0625-0.125 / 2 px',
      imageContent: <div style={{background: '#757575', width: 100, height: 75, borderRadius: 2, marginTop: "-32px"}}></div>,
      image: '/img/rounding2.svg',
      context: "A few components, like the checkbox, have a smaller rounding. In this case, the corner radius is connected to the thickness of its border width in order to have the inside of the border perfectly square and the outside perfectly rounded."
    },
    {
      title: 'Full Rounding',
      content: '5 EM / 25 px',
      imageContent: <div style={{background: '#757575', width: 100, height: 75, borderRadius: 50, marginTop: "-32px"}}></div>,
      image: '/img/rounding3.svg',
      context: "Full rounding is used sparingly throughout STUDS, but the most common use is for CTA buttons. This shape is meant to draw attention to calls to action."
    },
  ];

  return (
   <ObjectStyleTable data={roundingData} />
  );
}
