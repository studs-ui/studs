import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function ResizerFeatures({children}): JSX.Element {
  return (
    <studs-resizer direction="horizontal" style={{ width: '100%'}}>
      <studs-resizer-pane size="100%" style={{display: 'block', border: '1px solid hsl(240 5.9% 90%)'}} >
          <div style={{padding: '40px'}}>
            {children}
          </div>
      </studs-resizer-pane>
      <studs-resizer-pane></studs-resizer-pane>
  </studs-resizer>
  );
}
