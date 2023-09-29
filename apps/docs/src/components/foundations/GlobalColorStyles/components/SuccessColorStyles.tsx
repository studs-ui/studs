import React from 'react';
import DesignGuideTable from '@site/src/components/DesignGuideTable/DesignGuideTable';
import SampleColor from '@site/src/components/SampleColor/SampleColor';

export const SuccessColorStyles = () => (
  <DesignGuideTable
    title="Success"
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
            content: <SampleColor background="#2E7D32" type="circle" />,
          },
          {
            content: 'Reflects the success.main variable from the theme object',
          },
        ],
        [
          {
            content: 'Dark',
          },
          {
            content: <SampleColor background="#1B5E20" type="circle" />,
          },
          {
            content:
              'Used for hover states. Reflects the success.dark variable from the theme object',
          },
        ],
        [
          {
            content: 'Light',
          },
          {
            content: <SampleColor background="#4CAF50" type="circle" />,
          },
          {
            content:
              'Reflects the success.light variable from the theme object',
          },
        ],
        [
          {
            content: 'Contrast',
          },
          {
            content: <SampleColor background="#FFF" type="circle" />,
          },
          {
            content:
              'Reflects the success.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color',
          },
        ],
        [
          {
            content: '4p',
          },
          {
            content: (
              <SampleColor background="rgba(46, 125, 50, 0.04)" type="circle" />
            ),
          },
          {
            content:
              'Used for hover states. The token represents 4% of the Success/Main token',
          },
        ],
        [
          {
            content: '12p',
          },
          {
            content: (
              <SampleColor background="rgba(46, 125, 50, 0.12)" type="circle" />
            ),
          },
          {
            content:
              'Used for focus visible states. The token represents 12% of the Success/Main token',
          },
        ],
        [
          {
            content: '30p',
          },
          {
            content: (
              <SampleColor background="rgba(46, 125, 50, 0.30)" type="circle" />
            ),
          },
          {
            content:
              'Used for focus visible states. The token represents 30% of the Success/Main token',
          },
        ],
        [
          {
            content: '30p Ripple',
          },
          {
            content: (
              <SampleColor
                background="var(--light-success-shades-30-p-ripple, radial-gradient(36.59% 100.8% at 50% 50%, rgba(46, 125, 50, 0.30) 99.54%, rgba(255, 255, 255, 0.00) 100%))"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for focus visible states with ripple enabled. The token represents 30% of the Success/Main token',
          },
        ],
        [
          {
            content: '50p',
          },
          {
            content: (
              <SampleColor
                background="rgba(46, 125, 50, 0.50)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for enabled state. The token represents 50% of the Success/Main token',
          },
        ],
        [
          {
            content: '160p',
          },
          {
            content: (
              <SampleColor
                background="var(--light-success-shades-160-p, linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), #2E7D32)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for Alert content. The token represents 60% #000 on top of the Success/Main token',
          },
        ],
        [
          {
            content: '190p',
          },
          {
            content: (
              <SampleColor
                background="var(--light-success-shades-190-p, linear-gradient(0deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.90) 100%), #2E7D32)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for Alert background. The token represents 90% #FFF on top of the Success/Main token',
          },
        ],
      ],
    }}
  />
);
