import React from 'react';
import styles from './styles.module.css';

export default function ContentImage(props): JSX.Element {
  const { title, content, image } = props;
  return (
    <div className={styles.contentWrapper}>
      <span style={{fontWeight: 700, fontSize: "14px"}}>{title}</span>
      <span style={{fontWeight: 500, fontSize: "14px"}}>{content}</span>
      <div style={{paddingTop: 44}}>{image}</div>
    </div>
  );
}
