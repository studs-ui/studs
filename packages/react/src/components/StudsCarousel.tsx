import { createComponent } from '@lit-labs/react';
import { StudsCarousel as StudsCarouselClass } from '@studs/ui';
import React from 'react';

// carousel

const StudsCarousel = createComponent({
    tagName: 'studs-carousel',
    elementClass: StudsCarouselClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
});

export default StudsCarousel;