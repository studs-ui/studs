import { createComponent } from '@lit-labs/react';
import { StudsBadge as StudsBadgeClass } from '@studs/ui';
import React from 'react';


const StudsBadge = createComponent({
    tagName: 'studs-badge',
    elementClass: StudsBadgeClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsBadge;