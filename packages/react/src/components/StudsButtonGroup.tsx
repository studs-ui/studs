import { createComponent } from '@lit-labs/react';
import { StudsButtonGroup as StudsButtonGroupClass } from '@studs/ui';
import React from 'react';


const StudsButtonGroup = createComponent({
    tagName: 'studs-button-group',
    elementClass: StudsButtonGroupClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsButtonGroup;