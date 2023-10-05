import { createComponent } from '@lit-labs/react';
import { StudsDropdown as StudsDropdownClass } from '@studs/ui';
import React from 'react';

// dropdown

const StudsDropdown = createComponent({
    tagName: 'studs-dropdown',
    elementClass: StudsDropdownClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsDropdown;