import React from 'react';
import DesignGuideTable from '@site/src/components/DesignGuideTable/DesignGuideTable';
import SampleColor from '@site/src/components/SampleColor/SampleColor';

export const OtherMiscColorStyles = () => (
  <DesignGuideTable
    title="Other/Misc"
    data={{
      columns: [
        {
          title: 'Variable name',
          styles: {
            whiteSpace: 'nowrap',
          },
        },
        {
          title: 'Sample',
        },
        {
          title: 'Description',
          styles: {
            width: '100%',
          },
        },
      ],
      rows: [
        [
          {
            content: 'Divider',
          },
          {
            content: (
              <SampleColor background="rgba(0, 0, 0, 0.12)" type="circle" />
            ),
          },
          {
            content:
              'Reflects the divider variable from the theme object',
          },
        ],
        [
          {
            content: 'Outline Border',
          },
          {
            content: (
              <SampleColor background="#FFF" type="circle" />
            ),
          },
          {
            content: 'Border style for outlined variant components in resting state (Text Field, Select, Chips, etc)',
          },
        ],
        [
          {
            content: 'Standard Input Line',
          },
          {
            content: (
              <SampleColor background="#FFF" type="circle" />
            ),
          },
          {
            content:
              'Border style for standard variant Text Field & Select',
          },
        ],
        [
          {
            content: 'Backdrop Overlay',
          },
          {
            content: (
              <SampleColor background="rgba(0, 0, 0, 0.50)" type="circle" />
            ),
          },
          {
            content:
              'Backdrop overlay style',
          },
        ],
        [
          {
            content: 'Rating Active',
          },
          {
            content: (
              <SampleColor background="#FFB400" type="circle" />
            ),
          },
          {
            content:
              'Active state color for Rating component',
          },
        ],
        [
          {
            content: 'Snackbar Background',
          },
          {
            content: (
              <SampleColor background="#323232" type="circle" />
            ),
          },
          {
            content: 'Snackbar background',
          },
        ],
      ],
    }}
  />
);
