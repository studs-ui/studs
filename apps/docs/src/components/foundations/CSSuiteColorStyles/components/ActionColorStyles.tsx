import React from 'react';
import DesignGuideTable from '@site/src/components/DesignGuideTable/DesignGuideTable';
import SampleColor from '@site/src/components/SampleColor/SampleColor';

export const ActionColorStyles = () => (
  <DesignGuideTable
    title="Action"
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
            content: 'Action/Active',
          },
          {
            content: (
              <SampleColor background="rgba(0, 0, 0, 0.54)" type="circle" />
            ),
          },
          {
            content:
              'Reflects the action.active variable from the theme object',
          },
        ],
        [
          {
            content: 'Action/Hover',
          },
          {
            content: (
              <SampleColor background="rgba(0, 0, 0, 0.04)" type="circle" />
            ),
          },
          {
            content: 'Reflects the action.hover variable from the theme object',
          },
        ],
        [
          {
            content: 'Action/Selected',
          },
          {
            content: (
              <SampleColor background="rgba(0, 0, 0, 0.08)" type="circle" />
            ),
          },
          {
            content:
              'Reflects the action.selected variable from the theme object',
          },
        ],
        [
          {
            content: 'Action/Disabled',
          },
          {
            content: (
              <SampleColor background="rgba(0, 0, 0, 0.26)" type="circle" />
            ),
          },
          {
            content:
              'Reflects the action.disabled variable from the theme object',
          },
        ],
        [
          {
            content: 'Action/Disabled Background',
          },
          {
            content: (
              <SampleColor background="rgba(0, 0, 0, 0.12)" type="circle" />
            ),
          },
          {
            content:
              'Reflects the action.disabledBackground variable from the theme object',
          },
        ],
        [
          {
            content: 'Action/Focus',
          },
          {
            content: (
              <SampleColor background="rgba(0, 0, 0, 0.12)" type="circle" />
            ),
          },
          {
            content: 'Reflects the action.focus variable from the theme object',
          },
        ],
      ],
    }}
  />
);
