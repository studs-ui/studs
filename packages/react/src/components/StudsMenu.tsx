import { createComponent } from '@lit-labs/react';
import { StudsMenu as StudsMenuClass } from '@studs/ui';
import React from 'react';

// menu

const StudsMenu = createComponent({
    tagName: 'studs-menu',
    elementClass: StudsMenuClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsMenu;