import { createComponent } from '@lit-labs/react';
import { StudsTable as StudsTableClass } from '@studs/ui';
import React from 'react';

// table

const StudsTable = createComponent({
    tagName: 'studs-table',
    elementClass: StudsTableClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsTable;