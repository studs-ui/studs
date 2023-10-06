import { createComponent } from '@lit-labs/react';
import { StudsNavbar as StudsNavbarClass } from '@studs/ui';
import React from 'react';

// navbar

const StudsNavbar = createComponent({
    tagName: 'studs-navbar',
    elementClass: StudsNavbarClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsNavbar;