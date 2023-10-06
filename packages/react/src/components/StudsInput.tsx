import { createComponent } from '@lit-labs/react';
import { StudsInput as StudsInputClass } from '@studs/ui';
import React from 'react';

// input

const StudsInput = createComponent({
    tagName: 'studs-input',
    elementClass: StudsInputClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsInput;