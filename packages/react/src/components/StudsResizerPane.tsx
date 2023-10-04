import { createComponent } from '@lit-labs/react';
import { StudsResizerPane as StudsResizerPaneClass } from '@studs/ui';
import React from 'react';

// resizer pane

const StudsResizerPane = createComponent({
    tagName: 'studs-resizer-pane',
    elementClass: StudsResizerPaneClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsResizerPane;