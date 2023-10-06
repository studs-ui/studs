import { createComponent } from '@lit-labs/react';
import { StudsSwitch as StudsSwitchClass } from '@studs/ui';
import React from 'react';

// switch

const StudsSwitch = createComponent({
    tagName: 'studs-switch',
    elementClass: StudsSwitchClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsSwitch;