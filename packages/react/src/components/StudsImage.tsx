import { createComponent } from '@lit-labs/react';
import { StudsImage as StudsImageClass } from '@studs/ui';
import React from 'react';

// image

const StudsImage = createComponent({
    tagName: 'studs-image',
    elementClass: StudsImageClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsImage;