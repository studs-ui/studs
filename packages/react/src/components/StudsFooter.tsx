import { createComponent } from '@lit-labs/react';
import { StudsFooter as StudsFooterClass } from '@studs/ui';
import React from 'react';

// studs-footer

const StudsFooter = createComponent({
    tagName: 'studs-footer',
    elementClass: StudsFooterClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsFooter;
