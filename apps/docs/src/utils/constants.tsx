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
