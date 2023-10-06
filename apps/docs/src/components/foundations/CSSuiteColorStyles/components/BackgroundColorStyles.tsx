import React from 'react';
import DesignGuideTable from '@site/src/components/DesignGuideTable/DesignGuideTable';
import SampleColor from '@site/src/components/SampleColor/SampleColor';

export const BackgroundColorStyles = () => (
  <DesignGuideTable
    title="Background"
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
            content: 'Divider',
          },
          {
            content: (
              <SampleColor background="rgba(0, 0, 0, 0.23)" type="circle" />
            ),
          },
          {
            content:
              'Reflects the background.paper variable from the theme object',
          },
        ],
        [
          {
            content: 'Outline Border',
          },
          {
            content: <SampleColor background="#FFF" type="circle" />,
          },
          {
            content:
              'Reflects the background.default variable from the theme object',
          },
        ],
      ],
    }}
  />
);
