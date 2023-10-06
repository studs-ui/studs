import { createComponent } from '@lit-labs/react';
import { StudsIcon as StudsIconClass } from '@studs/ui';
import React from 'react';

// icon

const StudsIcon = createComponent({
    tagName: 'studs-icon',
    elementClass: StudsIconClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsIcon;