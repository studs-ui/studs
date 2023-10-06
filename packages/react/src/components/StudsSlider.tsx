import { createComponent } from '@lit-labs/react';
import { StudsSlider as StudsSliderClass } from '@studs/ui';
import React from 'react';

// slider

const StudsSlider = createComponent({
    tagName: 'studs-slider',
    elementClass: StudsSliderClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsSlider;