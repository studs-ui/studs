import React from 'react';
import styles from './styles.module.scss';
import ContentImage from '../ContentImage';

export default function ObjectStyleTable(props): JSX.Element {
  const { data } = props;

  return (
    <div className={styles.tableWrapper}>
      {data.map((item) => {
        return (
          <div className="rowWrapper" style={{width: 600, margin: "55px 50px 42px 50px"}}>
            <div style={{width: 130}}>
            <ContentImage
              title={item.title}
              content={item.content}
              image={item.imageContent}
            />
            </div>
            <div><img style={{margin: "0 22px 0 22px"}} width={103} src={item.image} alt="image" /></div>
            <div style={{width: 298, fontSize: "14px"}}><span>{item.context}</span></div>
          </div>
        );
      })}
    </div>
  );
}
