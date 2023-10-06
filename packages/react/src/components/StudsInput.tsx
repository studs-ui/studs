import { createComponent } from '@lit-labs/react';
import { StudsInput as StudsInputClass } from '@studs/ui';
import React from 'react';

// input

const StudsInput = createComponent({
    tagName: 'studs-input',
    elementClass: StudsInputClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsInput;