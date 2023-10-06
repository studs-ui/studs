import { createComponent } from '@lit-labs/react';
import { StudsToaster as StudsToasterClass } from '@studs/ui';
import React from 'react';

// toaster

const StudsToaster = createComponent({
    tagName: 'studs-toaster',
    elementClass: StudsToasterClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsToaster;