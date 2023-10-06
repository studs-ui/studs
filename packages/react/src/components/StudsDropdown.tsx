import { createComponent } from '@lit-labs/react';
import { StudsDropdown as StudsDropdownClass } from '@studs/ui';
import React from 'react';

// dropdown

const StudsDropdown = createComponent({
    tagName: 'studs-dropdown',
    elementClass: StudsDropdownClass,
    react: React,
    events: {
        onChange: 'change',
        onClick: 'click',
        onFocus: 'focus',
        onBlur: 'blur',
        onActionButtonClick: 'action-button-click'
    },
});

export default StudsDropdown;