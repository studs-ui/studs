import React from 'react';
import DesignGuideTable from '@site/src/components/DesignGuideTable/DesignGuideTable';
import SampleColor from '@site/src/components/SampleColor/SampleColor';

export const SecondaryColorStyles = () => (
  <DesignGuideTable
    title="Secondary"
    data={{
      columns: [
        {
          title: 'Variable Name',
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
            content: <SampleColor background="#58141E" type="circle" />,
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
                background="var(--light-secondary-shades-4-p, rgba(88, 20, 30, 0.04))"
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
                background="var(--light-secondary-shades-8-p, rgba(88, 20, 30, 0.08))"
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
                background="var(--light-secondary-shades-12-p, rgba(88, 20, 30, 0.12))"
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
                background="var(--light-secondary-shades-30-p, rgba(88, 20, 30, 0.30))"
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
                background="var(--light-secondary-shades-30-p-ripple, radial-gradient(36.59% 100.8% at 50% 50%, rgba(88, 20, 30, 0.30) 99.54%, rgba(255, 255, 255, 0.00) 100%))"
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
                background="var(--light-secondary-shades-50-p, rgba(88, 20, 30, 0.50))"
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
