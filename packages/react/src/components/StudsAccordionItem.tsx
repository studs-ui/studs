import { createComponent } from '@lit-labs/react';
import { StudsAccordionItem as StudsAccordionItemClass } from '@studs/ui';
import React from 'react';


const StudsAccordionItem = createComponent({
    tagName: 'studs-accordion-item',
    elementClass: StudsAccordionItemClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsAccordionItem;