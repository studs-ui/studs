import React from 'react';
import { StudsTabs, StudsResizer, StudsResizerPane } from '@studs/ui';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'studs-tabs': React.DetailedHTMLProps<
        React.HTMLAttributes<StudsTabs>,
        StudsTabs
      >;
      'studs-resizer': React.DetailedHTMLProps<
        React.HTMLAttributes<StudsResizer>,
        StudsResizer
      >;
      'studs-resizer-pane': React.DetailedHTMLProps<
        React.HTMLAttributes<StudsResizerPane>,
        StudsResizerPane
      >;
    }
  }
}
