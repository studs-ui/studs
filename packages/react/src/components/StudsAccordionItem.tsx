import { createComponent } from '@lit-labs/react';
import { StudsAccordionItem as StudsAccordionItemClass } from '@studs/ui';
import React from 'react';


const StudsAccordionItem = createComponent({
    tagName: 'studs-accordion-item',
    elementClass: StudsAccordionItemClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsAccordionItem;