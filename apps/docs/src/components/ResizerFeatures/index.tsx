import { RESIZER_THUMB_BACKGROUND } from '@site/src/utils/constants';
import React from 'react';

export default function ResizerFeatures({ children }): JSX.Element {
  const wrapperRef = React.useRef();
  const [initialWidth, setInitialWidth] = React.useState(300);

  React.useEffect(() => {
    setInitialWidth(wrapperRef.current.offsetWidth);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        border: '1px solid hsl(240 5.9% 90%)',
        overflow: 'hidden',
        padding: '20px',
        paddingRight: 0,
        marginBottom: '20px',
      }}
    >
      <studs-resizer
        direction="horizontal"
        style={{ width: '100%', backgroundColor: 'white' }}
      >
        <studs-resizer-pane max={200} size={initialWidth}>
          <div style={{ paddingRight: '20px' }}>
            <div style={{ height: '0', width: '100%', maxWidth: '100%' }}></div>
            {children}
          </div>
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
              right: '0',
              top: '-20px',
              bottom: '-20px',
            }}
          ></span>
        </studs-resizer-pane>

        <div
          style={{
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'var(--ifm-color-secondary-light)',
              height: 'calc(100% + 40px)',
              width: '100vw',
              marginTop: '-20px',
              borderLeft: `1px solid rgb(228, 228, 231)`,
            }}
          ></div>
          <studs-resizer-pane></studs-resizer-pane>
        </div>
      </studs-resizer>
    </div>
  );
}
