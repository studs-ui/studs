import { createComponent } from '@lit-labs/react';
import { StudsChip as StudsChipClass } from '@studs/ui';
import React from 'react';

// chip

const StudsChip = createComponent({
    tagName: 'studs-chip',
    elementClass: StudsChipClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsChip;