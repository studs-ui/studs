import React from 'react';
import DesignGuideTable from '@site/src/components/DesignGuideTable/DesignGuideTable';
import SampleColor from '@site/src/components/SampleColor/SampleColor';

export const ErrorColorStyles = () => (
  <DesignGuideTable
    title="Error"
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
            content: <SampleColor background="#B00020" type="circle" />,
          },
          {
            content: 'Reflects the error.main variable from the theme object',
          },
        ],
        [
          {
            content: '4p',
          },
          {
            content: (
              <SampleColor
                background="rgba(176, 0, 32, 0.04)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for hover states. The token represents 4% of the Error/Main token',
          },
        ],
        [
          {
            content: '12p',
          },
          {
            content: (
              <SampleColor
                background="rgba(176, 0, 32, 0.12)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for focus visible states. The token represents 12% of the Error/Main token',
          },
        ],
        [
          {
            content: '30p',
          },
          {
            content: (
              <SampleColor
                background="rgba(176, 0, 32, 0.30)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for focus visible states. The token represents 30% of the Error/Main token',
          },
        ],
        [
          {
            content: '30p Ripple',
          },
          {
            content: (
              <SampleColor
                background="var(--light-error-shades-30-p-ripple, radial-gradient(36.59% 100.8% at 50% 50%, rgba(176, 0, 32, 0.30) 99.54%, rgba(255, 255, 255, 0.00) 100%))"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for focus visible states with ripple enabled. The token represents 30% of the Error/Main token',
          },
        ],
        [
          {
            content: '50p',
          },
          {
            content: (
              <SampleColor
                background="rgba(222, 0, 40, 0.50)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for enabled state. The token represents 50% of the Error/Main token',
          },
        ],
        [
          {
            content: '160p',
          },
          {
            content: (
              <SampleColor
                background="var(--light-error-shades-160-p, linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), #B00020)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for Alert content. The token represents 60% #000 on top of the Error/Main token',
          },
        ],
        [
          {
            content: '190p',
          },
          {
            content: (
              <SampleColor
                background=" var(--light-error-shades-190-p, linear-gradient(0deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.90) 100%), #B00020)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for Alert background. The token represents 90% #FFF on top of the Error/Main token',
          },
        ],
      ],
    }}
  />
);
