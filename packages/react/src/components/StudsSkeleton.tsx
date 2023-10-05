import { createComponent } from '@lit-labs/react';
import { StudsSkeleton as StudsSkeletonClass } from '@studs/ui';
import React from 'react';

// skeleton

const StudsSkeleton = createComponent({
    tagName: 'studs-skeleton',
    elementClass: StudsSkeletonClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsSkeleton;