import { createComponent } from '@lit-labs/react';
import { StudsGrid as StudsGridClass } from '@studs/ui';
import React from 'react';

// grid

const StudsGrid = createComponent({
    tagName: 'studs-grid',
    elementClass: StudsGridClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsGrid;