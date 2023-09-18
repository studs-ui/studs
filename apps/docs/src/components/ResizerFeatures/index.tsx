import { RESIZER_THUMB_BACKGROUND } from '@site/src/utils/constants';
import React from 'react';

export default function ResizerFeatures({ children }): JSX.Element {
  return (
    <studs-resizer direction="horizontal" style={{ width: '100%' }}>
      <studs-resizer-pane
        max={200}
        size="100%"
        style={{ display: 'block', border: '1px solid hsl(240 5.9% 90%)' }}
      >
        <div style={{ padding: '40px' }}>{children}</div>
        <span
          style={{
            background: 'white',
            backgroundImage: RESIZER_THUMB_BACKGROUND,
            backgroundPosition: `45% 50%`,
            backgroundRepeat: 'no-repeat',
            width: '0.725rem', // same with the span.handle's resizer
            borderLeft: `1px solid rgb(228, 228, 231)`,
            zIndex: 1,
            pointerEvents: 'none',
            display: 'block',
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
          }}
        ></span>
      </studs-resizer-pane>
      <studs-resizer-pane></studs-resizer-pane>
    </studs-resizer>
  );
}
