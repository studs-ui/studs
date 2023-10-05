import { createComponent } from '@lit-labs/react';
import { StudsRadioGroup as StudsRadioGroupClass } from '@studs/ui';
import React from 'react';

// radio-group

const StudsRadioGroup = createComponent({
    tagName: 'studs-radio-group',
    elementClass: StudsRadioGroupClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsRadioGroup;