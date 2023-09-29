import React from 'react';
import DesignGuideTable from '@site/src/components/DesignGuideTable/DesignGuideTable';
import SampleColor from '@site/src/components/SampleColor/SampleColor';

export const InfoColorStyles = () => (
  <DesignGuideTable
    title="Info"
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
            content: <SampleColor background="#0288D1" type="circle" />,
          },
          {
            content: 'Reflects the info.main variable from the theme object',
          },
        ],
        [
          {
            content: 'Dark',
          },
          {
            content: <SampleColor background="#01579B" type="circle" />,
          },
          {
            content:
              'Used for hover states. Reflects the info.dark variable from the theme object',
          },
        ],
        [
          {
            content: 'Light',
          },
          {
            content: <SampleColor background="#03A9F4" type="circle" />,
          },
          {
            content:
              'Reflects the info.light variable from the theme object',
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
              'Reflects the info.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color',
          },
        ],
        [
          {
            content: '4p',
          },
          {
            content: (
              <SampleColor background="rgba(2, 136, 209, 0.04)" type="circle" />
            ),
          },
          {
            content:
              'Used for hover states. The token represents 4% of the Info/Main token',
          },
        ],
        [
          {
            content: '12p',
          },
          {
            content: (
              <SampleColor background="rgba(2, 136, 209, 0.12)" type="circle" />
            ),
          },
          {
            content:
              'Used for focus visible states. The token represents 12% of the Info/Main token',
          },
        ],
        [
          {
            content: '30p',
          },
          {
            content: (
              <SampleColor background="rgba(2, 136, 209, 0.30)" type="circle" />
            ),
          },
          {
            content:
              'Used for focus visible states. The token represents 30% of the Info/Main token',
          },
        ],
        [
          {
            content: '30p Ripple',
          },
          {
            content: (
              <SampleColor
                background="var(--light-info-shades-30-p-ripple, radial-gradient(36.59% 100.8% at 50% 50%, rgba(2, 136, 209, 0.30) 99.54%, rgba(255, 255, 255, 0.00) 100%))"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for focus visible states with ripple enabled. The token represents 30% of the Info/Main token',
          },
        ],
        [
          {
            content: '50p',
          },
          {
            content: (
              <SampleColor background=" var(--light-info-shades-50-p, rgba(2, 136, 209, 0.50))" type="circle" />
            ),
          },
          {
            content:
              'Used for enabled state. The token represents 50% of the Info/Main token',
          },
        ],
        [
          {
            content: '160p',
          },
          {
            content: (
              <SampleColor
                background="var(--light-info-shades-160-p, linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), #0288D1)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for Alert content. The token represents 60% #000 on top of the Info/Main token',
          },
        ],
        [
          {
            content: '190p',
          },
          {
            content: (
              <SampleColor
                background="var(--light-info-shades-190-p, linear-gradient(0deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.90) 100%), #0288D1)"
                type="circle"
              />
            ),
          },
          {
            content:
              'Used for Alert background. The token represents 90% #FFF on top of the Info/Main token',
          },
        ],
      ],
    }}
  />
);
