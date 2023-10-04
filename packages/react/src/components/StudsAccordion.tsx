import { createComponent } from '@lit-labs/react';
import { StudsAccordion as StudsAccordionClass } from '@studs/ui';
import React from 'react';


const StudsAccordion = createComponent({
    tagName: 'studs-accordion',
    elementClass: StudsAccordionClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsAccordion;
