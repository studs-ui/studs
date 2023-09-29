import React from 'react';
import DesignGuideTable from '@site/src/components/DesignGuideTable/DesignGuideTable';
import SampleColor from '@site/src/components/SampleColor/SampleColor';

export const TextColorStyles = () => (
  <DesignGuideTable
    title="Text"
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
            content: 'Primary',
          },
          {
            content: (
              <SampleColor
                background="rgba(0, 0, 0, 0.87)"
                type="circle"
              />
            ),
          },
          {
            content: 'Reflects the text.primary variable from the theme object',
          },
        ],
        [
          {
            content: 'Secondary',
          },
          {
            content: (
              <SampleColor
                background="rgba(0, 0, 0, 0.60)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Reflects the text.secondary variable from the theme object',
          },
        ],
        [
          {
            content: 'Disabled',
          },
          {
            content: (
              <SampleColor
                background="rgba(0, 0, 0, 0.38)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Reflects the text.disabled variable from the theme object',
          },
        ],
      ],
    }}
  />
);
