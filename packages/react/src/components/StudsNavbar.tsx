import { createComponent } from '@lit-labs/react';
import { StudsNavbar as StudsNavbarClass } from '@studs/ui';
import React from 'react';

// navbar

const StudsNavbar = createComponent({
    tagName: 'studs-navbar',
    elementClass: StudsNavbarClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsNavbar;