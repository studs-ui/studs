import { createComponent } from '@lit-labs/react';
import { StudsRadioGroup as StudsRadioGroupClass } from '@studs/ui';
import React from 'react';

// radio-group

const StudsRadioGroup = createComponent({
    tagName: 'studs-radio-group',
    elementClass: StudsRadioGroupClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsRadioGroup;