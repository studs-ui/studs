import { createComponent } from '@lit-labs/react';
import { StudsMenu as StudsMenuClass } from '@studs/ui';
import React from 'react';

// menu

const StudsMenu = createComponent({
    tagName: 'studs-menu',
    elementClass: StudsMenuClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsMenu;