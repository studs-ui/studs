import { createComponent } from '@lit-labs/react';
import { StudsTextarea as StudsTextareaClass } from '@studs/ui';
import React from 'react';

// textarea

const StudsTextarea = createComponent({
    tagName: 'studs-textarea',
    elementClass: StudsTextareaClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsTextarea;