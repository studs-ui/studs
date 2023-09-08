import React from 'react';
import { StudsChip } from '@studs/ui';
import { StudsTabs } from '@studs/ui';
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
    }
  }
}

