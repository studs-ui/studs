import React from 'react';
import styles from './styles.module.scss';

const SizeConvert = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>XS (mobile)</div>
      <div className={styles.pixel}>0-599px</div>
      <div className={styles.heading}>Small (tablet)</div>
      <div className={styles.pixel}>600-904px</div>
      <div className={styles.heading}>Large (desktop)</div>
      <div className={styles.pixel}>1696px+</div>
    </div>
  );
};

export default SizeConvert;
