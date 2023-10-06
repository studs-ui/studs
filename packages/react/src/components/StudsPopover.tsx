import { createComponent } from '@lit-labs/react';
import { StudsPopover as StudsPopoverClass } from '@studs/ui';
import React from 'react';

// popover

const StudsPopover = createComponent({
    tagName: 'studs-popover',
    elementClass: StudsPopoverClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsPopover;
