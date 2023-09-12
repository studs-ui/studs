import React from 'react';
import { createComponent } from '@lit-labs/react';
import { StudsButton as Class } from '@studs/ui';

export const StudsButton = createComponent({
  tagName: 'studs-button',
  elementClass: Class,
  react: React,
  events: {
    onchange: 'change',
    onclick: 'click',
    onfocus: 'focus',
    onblur: 'blur',
  },
});
