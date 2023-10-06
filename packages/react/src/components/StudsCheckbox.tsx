import { createComponent } from '@lit-labs/react';
import { StudsCheckbox as StudsCheckboxClass } from '@studs/ui';
import React from 'react';

// checkboxes

const StudsCheckbox = createComponent({
    tagName: 'studs-checkbox',
    elementClass: StudsCheckboxClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsCheckbox;