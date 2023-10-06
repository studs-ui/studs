import { createComponent } from '@lit-labs/react';
import { StudsSpinner as StudsSpinnerClass } from '@studs/ui';
import React from 'react';

// spinner

const StudsSpinner = createComponent({
    tagName: 'studs-spinner',
    elementClass: StudsSpinnerClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsSpinner;