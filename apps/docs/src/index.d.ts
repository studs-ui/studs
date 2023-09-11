import React from 'react';
import { StudsTabs } from '@studs/ui';
import { StudsTable } from '@studs/ui';

declare global {
  namespace JSX {
    interface IntrinsicElements {
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
