import { createComponent } from '@lit-labs/react';
import { StudsHeader as StudsHeaderClass } from '@studs/ui';
import React from 'react';

// studs-header

const StudsHeader = createComponent({
    tagName: 'studs-header',
    elementClass: StudsHeaderClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
    },
});

export default StudsHeader;