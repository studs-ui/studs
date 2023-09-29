import React from 'react';
import styles from './styles.module.css';

interface Column {
  title: string;
  styles?: React.CSSProperties;
}

interface Row {
  content: React.ReactNode | string;
}

interface DesignGuideTableProps {
  title: string;
  data: { columns: Array<Column>; rows: Array<Array<Row>> };
}

export default function DesignGuideTable({
  title = '',
  data,
}: DesignGuideTableProps): JSX.Element {
  return (
    <section>
      <h3>{title}</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            {data.columns.map((col, i) => {
              return (
                <td key={i} style={col.styles}>
                  {col.title}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rI) => {
            return (
              <tr key={rI}>
                {row.map((cell, i) => {
                  return <td key={i}>{cell.content}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}