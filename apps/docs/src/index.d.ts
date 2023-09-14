import React from 'react';
import { StudsTabs, StudsResizer, StudsResizerPane } from '@studs/ui';
import { StudsChip } from '@studs/ui';
import { StudsTable } from '@studs/ui';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'studs-chip': React.DetailedHTMLProps<
        React.HTMLAttributes<StudsChip>,
        StudsChip
      >;
      'studs-tabs': React.DetailedHTMLProps<
        React.HTMLAttributes<StudsTabs>,
        StudsTabs
      >,
      'studs-table': React.DetailedHTMLProps<
        React.HTMLAttributes<StudsTable>,
        StudsTable
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

