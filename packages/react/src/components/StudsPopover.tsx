import { createComponent } from '@lit-labs/react';
import { StudsPopover as StudsPopoverClass } from '@studs/ui';
import React from 'react';

// popover

const StudsPopover = createComponent({
    tagName: 'studs-popover',
    elementClass: StudsPopoverClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsPopover;
