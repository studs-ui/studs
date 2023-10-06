import { createComponent } from '@lit-labs/react';
import { StudsRadio as StudsRadioClass } from '@studs/ui';
import React from 'react';

// radio

const StudsRadio = createComponent({
    tagName: 'studs-radio',
    elementClass: StudsRadioClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsRadio;