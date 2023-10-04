import React from 'react';
import styles from './styles.module.css';


export default function TypographySection(props): JSX.Element {
  const { title, data } = props;
  return (
    <section className={styles.typography}>
      <div className="title">{title}</div>
      {data.map((item) => {
        return (
          <label className="label" style={item.style}>
            {item.content}
          </label>
        );
      })}
    </section>
  );
}
