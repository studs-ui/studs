import { createComponent } from '@lit-labs/react';
import { StudsTooltip as StudsTooltipClass } from '@studs/ui';
import React from 'react';

// tooltip

const StudsTooltip = createComponent({
    tagName: 'studs-tooltip',
    elementClass: StudsTooltipClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsTooltip;