import { createComponent } from '@lit-labs/react';
import { StudsAccordion as StudsAccordionClass, StudsAccordionItem as StudsAccordionItemClass, StudsBadge as StudsBadgeClass, StudsButton as StudsButtonClass, StudsButtonGroup as StudsButtonGroupClass, StudsCard as StudsCardClass, StudsCarousel as StudsCarouselClass, StudsCheckbox as StudsCheckboxClass, StudsChip as StudsChipClass, StudsDropdown as StudsDropdownClass, StudsGrid as StudsGridClass, StudsIcon as StudsIconClass, StudsImage as StudsImageClass, StudsInput as StudsInputClass, StudsMenu as StudsMenuClass, StudsPagination as StudsPaginationClass, StudsRadio as StudsRadioClass, StudsRadioGroup as StudsRadioGroupClass, StudsResizer as StudsResizerClass, StudsResizerPane as StudsResizerPaneClass, StudsSkeleton as StudsSkeletonClass, StudsSlider as StudsSliderClass, StudsSpinner as StudsSpinnerClass, StudsStepper as StudsStepperClass, StudsSwitch as StudsSwitchClass, StudsTable as StudsTableClass, StudsTabs as StudsTabsClass, StudsCoachMark as StudsCoachmarkClass, StudsFooter as StudsFooterClass, StudsHeader as StudsHeaderClass, StudsModal as StudsModalClass, StudsNavbar as StudsNavbarClass, StudsPopover as StudsPopoverClass, StudsTextarea as StudsTextareaClass, StudsToast as StudsToastClass, StudsToaster as StudsToasterClass, StudsTooltip as StudsTooltipClass } from '@studs/ui';
import React from 'react';
import "@studs/styles";
// import ReactDOM from 'react-dom/client';
// import { App } from './App';

export const StudsButton = createComponent({
    tagName: 'studs-button',
    elementClass: StudsButtonClass,
    react: React,
    events: {
      onchange: 'change',
      onclick: 'click',
      onfocus: 'focus',
      onblur: 'blur',
    },
  });

export const StudsAccordion = createComponent({
    tagName: 'studs-accordion',
    elementClass: StudsAccordionClass,
    react: React,
    events: {
      onchange: 'change',
      onclick: 'click',
      onfocus: 'focus',
      onblur: 'blur',
    },
    });

export const StudsAccordionItem = createComponent({
    tagName: 'studs-accordion-item',
    elementClass: StudsAccordionItemClass,
    react: React,
    events: {
      onchange: 'change',
      onclick: 'click',
      onfocus: 'focus',
      onblur: 'blur',
    },
    });

export const StudsBadge = createComponent({
    tagName: 'studs-badge',
    elementClass: StudsBadgeClass,
    react: React,
    events: {
      onchange: 'change',
      onclick: 'click',
      onfocus: 'focus',
      onblur: 'blur',
    },
    });

export const StudsButtonGroup = createComponent({
    tagName: 'studs-button-group',
    elementClass: StudsButtonGroupClass,
    react: React,
    events: {
      onchange: 'change',
      onclick: 'click',
      onfocus: 'focus',
      onblur: 'blur',
    },
    });

export const StudsCard = createComponent({
    tagName: 'studs-card',
    elementClass: StudsCardClass,
    react: React,
    events: {
      onchange: 'change',
      onclick: 'click',
      onfocus: 'focus',
      onblur: 'blur',
    },
    });
// carousel
export const StudsCarousel = createComponent({
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
// chip
export const StudsChip = createComponent({
    tagName: 'studs-chip',
    elementClass: StudsChipClass,
    react: React,
    events: {
      onchange: 'change',
      onclick: 'click',
      onfocus: 'focus',
      onblur: 'blur',
      },
    });
// grid
export const StudsGrid = createComponent({
    tagName: 'studs-grid',
    elementClass: StudsGridClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
    });

// icon
export const StudsIcon = createComponent({
    tagName: 'studs-icon',
    elementClass: StudsIconClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
    });

// image
export const StudsImage = createComponent({
    tagName: 'studs-image',
    elementClass: StudsImageClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
    });

// menu
export const StudsMenu = createComponent({
    tagName: 'studs-menu',
    elementClass: StudsMenuClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
    });

// pagination
export const StudsPagination = createComponent({
    tagName: 'studs-pagination',
    elementClass: StudsPaginationClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
    });

// resizer pane
export const StudsResizerPane = createComponent({
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

// resizer
export const StudsResizer = createComponent({
    tagName: 'studs-resizer',
    elementClass: StudsResizerClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
    },
    });

// skeleton
export const StudsSkeleton = createComponent({
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

// spinner
export const StudsSpinner = createComponent({
    tagName: 'studs-spinner',
    elementClass: StudsSpinnerClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
        },
    });

// stepper

export const StudsStepper = createComponent({
    tagName: 'studs-stepper',
    elementClass: StudsStepperClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
        },
    });

// table
export const StudsTable = createComponent({
    tagName: 'studs-table',
    elementClass: StudsTableClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
        },
    });

// tabs
export const StudsTabs = createComponent({
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

// checkboxes
export const StudsCheckbox = createComponent({
    tagName: 'studs-checkbox',
    elementClass: StudsCheckboxClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
        },
    });

// dropdown
export const StudsDropdown = createComponent({
    tagName: 'studs-dropdown',
    elementClass: StudsDropdownClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
        },
    });

// input
export const StudsInput = createComponent({
    tagName: 'studs-input',
    elementClass: StudsInputClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
        },
    });

// radio-group
export const StudsRadioGroup = createComponent({
    tagName: 'studs-radio-group',
    elementClass: StudsRadioGroupClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
        },
    });

// radio
export const StudsRadio = createComponent({
    tagName: 'studs-radio',
    elementClass: StudsRadioClass,
    react: React,
    events: {
        onchange: 'change',
        onclick: 'click',
        onfocus: 'focus',
        onblur: 'blur',
        },
});

// slider
export const StudsSlider = createComponent({
    tagName: 'studs-slider',
    elementClass: StudsSliderClass,
    react: React,
    events: {
    onchange: 'change',
    onclick: 'click',
    onfocus: 'focus',
    onblur: 'blur',
    },
});

// switch
export const StudsSwitch = createComponent({
    tagName: 'studs-switch',
    elementClass: StudsSwitchClass,
    react: React,
    events: {
    onchange: 'change',
    onclick: 'click',
    onfocus: 'focus',
    onblur: 'blur',
    },
});

// textarea
export const StudsTextarea = createComponent({
    tagName: 'studs-textarea',
    elementClass: StudsTextareaClass,
    react: React,
    events: {
    onchange: 'change',
    onclick: 'click',
    onfocus: 'focus',
    onblur: 'blur',
    },
});

// navbar
export const StudsNavbar = createComponent({
    tagName: 'studs-navbar',
    elementClass: StudsNavbarClass,
    react: React,
    events: {
    onchange: 'change',
    onclick: 'click',
    onfocus: 'focus',
    onblur: 'blur',
    },
});

// studs-footer
export const StudsFooter = createComponent({
    tagName: 'studs-footer',
    elementClass: StudsFooterClass,
    react: React,
    events: {
    onchange: 'change',
    onclick: 'click',
    onfocus: 'focus',
    onblur: 'blur',
    },
});

// studs-header
export const StudsHeader = createComponent({
    tagName: 'studs-header',
    elementClass: StudsHeaderClass,
    react: React,
    events: {
    onchange: 'change',
    onclick: 'click',
    onfocus: 'focus',
    onblur: 'blur',
    },
});

// coachmark
export const StudsCoachMark = createComponent({
    tagName: 'studs-coachmark',
    elementClass: StudsCoachmarkClass,
    react: React,
    events: {
    onchange: 'change',
    onclick: 'click',
    onfocus: 'focus',
    onblur: 'blur',
    },
});

// modal
export const StudsModal = createComponent({
    tagName: 'studs-modal',
    elementClass: StudsModalClass,
    react: React,
    events: {
    onchange: 'change',
    onclick: 'click',
    onfocus: 'focus',
    onblur: 'blur',
    },
});

// popover
export const StudsPopover = createComponent({
    tagName: 'studs-popover',
    elementClass: StudsPopoverClass,
    react: React,
    events: {
    onchange: 'change',
    onclick: 'click',
    onfocus: 'focus',
    onblur: 'blur',
    },
});

// toast
export const StudsToast = createComponent({
    tagName: 'studs-toast',
    elementClass: StudsToastClass,
    react: React,
    events: {
    onchange: 'change',
    onclick: 'click',
    onfocus: 'focus',
    onblur: 'blur',
    },
});

// toaster
export const StudsToaster = createComponent({
    tagName: 'studs-toaster',
    elementClass: StudsToasterClass,
    react: React,
    events: {
    onchange: 'change',
    onclick: 'click',
    onfocus: 'focus',
    onblur: 'blur',
    },
});

// tooltip
export const StudsTooltip = createComponent({
    tagName: 'studs-tooltip',
    elementClass: StudsTooltipClass,
    react: React,
    events: {
    onchange: 'change',
    onclick: 'click',
    onfocus: 'focus',
    onblur: 'blur',
    },
});

    

// ReactDOM.createRoot(document.getElementById('root')!).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   )