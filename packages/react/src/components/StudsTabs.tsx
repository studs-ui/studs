import { createComponent } from '@lit-labs/react';
import { StudsTabs as StudsTabsClass } from '@studs/ui';
import React from 'react';

// tabs

const StudsTabs = createComponent({
    tagName: 'studs-tabs',
    elementClass: StudsTabsClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsTabs;