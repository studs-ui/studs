import React from 'react';

export const FORM_PROPS = [
  {
    name: 'name',
    description: <></>,
    reflects: false,
    type: 'string',
  },
  {
    name: 'label',
    description: <></>,
    reflects: false,
    type: 'string',
  },
  {
    name: 'display',
    description: <></>,
    reflects: false,
    type: "'inline' | 'block'",
  },
  {
    name: 'disabled',
    description: <></>,
    reflects: false,
    type: 'boolean',
  },
  {
    name: 'placeholder',
    description: <></>,
    reflects: false,
    type: 'string',
  },
  {
    name: 'required',
    description: <></>,
    reflects: false,
    type: 'boolean',
  },
  {
    name: 'error',
    description: <></>,
    reflects: false,
    type: 'boolean',
  },
];

export const FIGMA_EMBED_URL = `https://www.figma.com/embed?embed_host=strongtie&url=`;

export const FIGMA_URL_REGEX =
  /https:\/\/([\w\.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/;

export const RESIZER_THUMB_BACKGROUND = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-grip-vertical' viewBox='0 0 16 16' part='svg'%3E%3Cpath d='M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z'%3E%3C/path%3E%3C/svg%3E")`;

export const BASE_URL_GITHUB =
  'https://github.com/studs-ui/studs/blob/main/packages/ui/src/components';

function getStorybookBaseUrl() {
  if (typeof window !== 'undefined') {
    const { hostname } = window.location;

    if (hostname.includes('studs.strongtie.com')) {
      return 'https://studs.strongtie.com/storybook?path=/docs';
    } else if (hostname.includes('studs-staging.strongtie.com')) {
      return 'https://studs-staging.strongtie.com/storybook?path=/docs';
    } else if (hostname.includes('studs-dev.strongtie.com')) {
      return 'https://studs-dev.strongtie.com/storybook?path=/docs';
    } else if (hostname.includes('localhost')) {
      return 'http://localhost:6006/?path=/docs';
    }
  }

  return 'https://studs.strongtie.com/storybook?path=/docs';
}

export const BASE_URL_STRB = getStorybookBaseUrl();

export const THEME_DROPDOWN_OPTIONS = [
  {
    id: 1,
    label: 'Builder Tools',
  },
  {
    id: 2,
    label: 'Component Manufacturing Tools',
  },
  {
    id: 3,
    label: 'General Tools',
  },
  {
    id: 4,
    label: 'Specification Tools',
  },
  {
    id: 5,
    label: 'Supplier Tools',
  },
];
