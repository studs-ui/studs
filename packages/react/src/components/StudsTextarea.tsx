import { createComponent } from '@lit-labs/react';
import { StudsTextarea as StudsTextareaClass } from '@studs/ui';
import React from 'react';

// textarea

const StudsTextarea = createComponent({
    tagName: 'studs-textarea',
    elementClass: StudsTextareaClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsTextarea;