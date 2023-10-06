import { createComponent } from '@lit-labs/react';
import { StudsResizerPane as StudsResizerPaneClass } from '@studs/ui';
import React from 'react';

// resizer pane

const StudsResizerPane = createComponent({
    tagName: 'studs-resizer-pane',
    elementClass: StudsResizerPaneClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
        onResize: 'resize'
    },
});

export default StudsResizerPane;