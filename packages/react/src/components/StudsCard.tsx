import { createComponent } from '@lit-labs/react';
import { StudsCard as StudsCardClass } from '@studs/ui';
import React from 'react';


const StudsCard = createComponent({
    tagName: 'studs-card',
    elementClass: StudsCardClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur'
    },
});

export default StudsCard;