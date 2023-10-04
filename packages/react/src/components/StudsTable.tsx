import { createComponent } from '@lit-labs/react';
import { StudsTable as StudsTableClass } from '@studs/ui';
import React from 'react';

// table

const StudsTable = createComponent({
    tagName: 'studs-table',
    elementClass: StudsTableClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsTable;