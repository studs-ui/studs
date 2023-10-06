import React from 'react';
import styles from './styles.module.scss';


export default function TypographySection(props): JSX.Element {
  const { title, data } = props;
  return (
    <section className={styles.typography}>
      <div className={styles.title}>{title}</div>
      {data.map((item) => {
        return (
          <label className={styles.label} style={item.style}>
            {item.content}
          </label>
        );
      })}
    </section>
  );
}
