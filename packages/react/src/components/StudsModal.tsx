import { createComponent } from '@lit-labs/react';
import { StudsModal as StudsModalClass } from '@studs/ui';
import React from 'react';

// modal

const StudsModal = createComponent({
    tagName: 'studs-modal',
    elementClass: StudsModalClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsModal;