import { createComponent } from '@lit-labs/react';
import { StudsSlider as StudsSliderClass } from '@studs/ui';
import React from 'react';

// slider

const StudsSlider = createComponent({
    tagName: 'studs-slider',
    elementClass: StudsSliderClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsSlider;