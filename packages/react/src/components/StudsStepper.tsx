import { createComponent } from '@lit-labs/react';
import { StudsStepper as StudsStepperClass } from '@studs/ui';
import React from 'react';

// stepper

const StudsStepper = createComponent({
    tagName: 'studs-stepper',
    elementClass: StudsStepperClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default  StudsStepper;