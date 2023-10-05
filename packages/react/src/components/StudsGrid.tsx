import { createComponent } from '@lit-labs/react';
import { StudsGrid as StudsGridClass } from '@studs/ui';
import React from 'react';

// grid

const StudsGrid = createComponent({
    tagName: 'studs-grid',
    elementClass: StudsGridClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsGrid;