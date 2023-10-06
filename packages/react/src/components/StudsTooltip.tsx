import { createComponent } from '@lit-labs/react';
import { StudsTooltip as StudsTooltipClass } from '@studs/ui';
import React from 'react';

// tooltip

const StudsTooltip = createComponent({
    tagName: 'studs-tooltip',
    elementClass: StudsTooltipClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsTooltip;