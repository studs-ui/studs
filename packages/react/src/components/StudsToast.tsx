import { createComponent } from '@lit-labs/react';
import { StudsToast as StudsToastClass } from '@studs/ui';
import React from 'react';

// toast

const StudsToast = createComponent({
    tagName: 'studs-toast',
    elementClass: StudsToastClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsToast;