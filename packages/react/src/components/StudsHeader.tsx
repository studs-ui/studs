import { createComponent } from '@lit-labs/react';
import { StudsHeader as StudsHeaderClass } from '@studs/ui';
import React from 'react';

// studs-header

const StudsHeader = createComponent({
    tagName: 'studs-header',
    elementClass: StudsHeaderClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsHeader;