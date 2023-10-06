import { createComponent } from '@lit-labs/react';
import { StudsResizer as StudsResizerClass } from '@studs/ui';
import React from 'react';

// resizer

const StudsResizer = createComponent({
    tagName: 'studs-resizer',
    elementClass: StudsResizerClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsResizer;