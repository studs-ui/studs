import React from 'react';
import DesignGuideTable from '@site/src/components/DesignGuideTable/DesignGuideTable';
import SampleColor from '@site/src/components/SampleColor/SampleColor';

export const PrimaryColorStyles = () => (
  <DesignGuideTable
    title="Primary"
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
            content: <SampleColor background="#347878" type="circle" />,
          },
          {
            content: 'Reflects the primary.main variable from the theme object',
          },
        ],
        [
          {
            content: '4p',
          },
          {
            content: (
              <SampleColor
                background="rgba(52, 120, 120, 0.13)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for hover states. The token represents 4% of the Primary/Main token which is affected by the value of action.hover theme object value.',
          },
        ],
        [
          {
            content: '8p',
          },
          {
            content: (
              <SampleColor
                background="rgba(52, 120, 120, 0.08)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for selected states. The token represents 8% of the Primary/Main token which is affected by the value of action.selected theme object value.',
          },
        ],
        [
          {
            content: '12p',
          },
          {
            content: (
              <SampleColor
                background="rgba(52, 120, 120, 0.12)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for focus visible states. The token represents 12% of the Primary/Main token',
          },
        ],
        [
          {
            content: '30p',
          },
          {
            content: (
              <SampleColor
                background="rgba(52, 120, 120, 0.12)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for focus visible states. The token represents 30% of the Primary/Main token',
          },
        ],
        [
          {
            content: '30p Ripple',
          },
          {
            content: (
              <SampleColor
                background=" var(--light-primary-shades-30-p-ripple, radial-gradient(36.59% 100.8% at 50% 50%, rgba(52, 120, 120, 0.30) 99.54%, rgba(255, 255, 255, 0.00) 100%))"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for focus visible states with ripple enabled. The token represents 30% of the Primary/Main token',
          },
        ],
        [
          {
            content: '50p',
          },
          {
            content: (
              <SampleColor
                background="rgba(52, 120, 120, 0.50)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for enabled state. The token represents 50% of the Primary/Main token',
          },
        ],
      ],
    }}
  />
);
