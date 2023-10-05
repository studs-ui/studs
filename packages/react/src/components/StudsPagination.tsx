import { createComponent } from '@lit-labs/react';
import { StudsPagination as StudsPaginationClass } from '@studs/ui';
import React from 'react';

// pagination

const StudsPagination = createComponent({
    tagName: 'studs-pagination',
    elementClass: StudsPaginationClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsPagination;