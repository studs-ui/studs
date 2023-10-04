import { createComponent } from '@lit-labs/react';
import { StudsButton as StudsButtonClass } from '@studs/ui';
import React from 'react';

// import ReactDOM from 'react-dom/client';
// import { App } from './App';
const StudsButton = createComponent({
    tagName: 'studs-button',
    elementClass: StudsButtonClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsButton;