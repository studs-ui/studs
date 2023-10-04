import React from 'react';
import styles from './styles.module.css';
interface IChipComponentProps {
  text?: string;
}
const ChipComponent = ({ text }: IChipComponentProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{text}</div>
    </div>
  );
};

export default ChipComponent;
