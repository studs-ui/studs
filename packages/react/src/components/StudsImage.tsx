import { createComponent } from '@lit-labs/react';
import { StudsImage as StudsImageClass } from '@studs/ui';
import React from 'react';

// image

const StudsImage = createComponent({
    tagName: 'studs-image',
    elementClass: StudsImageClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsImage;