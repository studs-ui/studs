import { createComponent } from '@lit-labs/react';
import { StudsCoachMark as StudsCoachmarkClass } from '@studs/ui';
import React from 'react';

// coachmark

const StudsCoachMark = createComponent({
    tagName: 'studs-coachmark',
    elementClass: StudsCoachmarkClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsCoachMark;