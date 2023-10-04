import { createComponent } from '@lit-labs/react';
import { StudsTabs as StudsTabsClass } from '@studs/ui';
import React from 'react';

// tabs

const StudsTabs = createComponent({
    tagName: 'studs-tabs',
    elementClass: StudsTabsClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsTabs;