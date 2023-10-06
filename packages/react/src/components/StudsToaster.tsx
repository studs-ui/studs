import { createComponent } from '@lit-labs/react';
import { StudsToaster as StudsToasterClass } from '@studs/ui';
import React from 'react';

// toaster

const StudsToaster = createComponent({
    tagName: 'studs-toaster',
    elementClass: StudsToasterClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsToaster;