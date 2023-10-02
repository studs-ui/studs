import React from 'react';
import DesignGuideTable from '@site/src/components/DesignGuideTable/DesignGuideTable';
import SampleColor from '@site/src/components/SampleColor/SampleColor';

export const TertiaryColorStyles = () => (
  <DesignGuideTable
    title="Tertiary"
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
            content: 'Main',
          },
          {
            content: <SampleColor background="#97392A" type="circle" />,
          },
          {
            content: 'Reflects the secondary.main variable from the theme object',
          },
        ],
        [
          {
            content: '4p',
          },
          {
            content: (
              <SampleColor
                background="rgba(151, 57, 42, 0.04)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for hover states. The token represents 4% of the Secondary/Main token which is affected by the value of action.hover theme object value.',
          },
        ],
        [
          {
            content: '8p',
          },
          {
            content: (
              <SampleColor
                background="rgba(151, 57, 42, 0.08)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for selected states. The token represents 8% of the Secondary/Main token which is affected by the value of action.selected theme object value.',
          },
        ],
        [
          {
            content: '12p',
          },
          {
            content: (
              <SampleColor
                background="rgba(151, 57, 42, 0.3)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for focus visible states. The token represents 12% of the Secondary/Main token',
          },
        ],
        [
          {
            content: '30p',
          },
          {
            content: (
              <SampleColor
                background="rgba(151, 57, 42, 0.3)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for focus visible states. The token represents 30% of the Secondary/Main token',
          },
        ],
        [
          {
            content: '30p Ripple',
          },
          {
            content: (
              <SampleColor
                background="var(--light-tertiary-shades-30-p-ripple, radial-gradient(50% 50% at 50% 50%, rgba(151, 57, 42, 0.09) 100%))"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for focus visible states with ripple enabled. The token represents 30% of the Secondary/Main token',
          },
        ],
        [
          {
            content: '50p',
          },
          {
            content: (
              <SampleColor
                background="rgba(151, 57, 42, 0.5)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for enabled state. The token represents 50% of the Secondary/Main token',
          },
        ],
      ],
    }}
  />
);
