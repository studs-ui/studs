import { createComponent } from '@lit-labs/react';
import { StudsSpinner as StudsSpinnerClass } from '@studs/ui';
import React from 'react';

// spinner

const StudsSpinner = createComponent({
    tagName: 'studs-spinner',
    elementClass: StudsSpinnerClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsSpinner;