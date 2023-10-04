import React from 'react';
import DesignGuideTable from '@site/src/components/DesignGuideTable/DesignGuideTable';
import SampleColor from '@site/src/components/SampleColor/SampleColor';
import ChipComponent from '../../ChipComponent';
import Content from '../../ContentComponent';

export const CoreColorsTable = () => (
  <DesignGuideTable
    title=""
    data={{
      columns: [
        {
          title: 'Token',
          styles: {
            width: ' 35%',
          },
        },
        {
          title: 'Role',
          styles: {
            width: ' 35%',
          },
        },
        {
          title: 'Value',
          styles: {
            width: ' 30%',
          },
        },
        {
          title: 'Sample',
        },
      ],
      rows: [
        [
          {
            content: <ChipComponent text="ui-background" />,
          },
          {
            content: 'Light page background',
          },
          {
            content: <Content name="Gray 00" code="#F4F4F4" />,
          },
          {
            content: <SampleColor background="#F4F4F4" border='1px solid #E2E2E2' type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="container-background-01" />,
          },
          {
            content: (
              <span>
                Container background on ui-background; <br /> Light container
                background
              </span>
            ),
          },
          {
            content: <Content name="White" code="#F4F4F4" />,
          },
          {
            content: (
              <SampleColor
                background="#FFFFFF"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="container-background-02" />,
          },
          {
            content: (
              <span>
                Container background on $ui-background; <br /> Subset container
                background
              </span>
            ),
          },
          {
            content: <Content name="Gray 10" code="#E2E2E2" />,
          },
          {
            content: <SampleColor background="#E2E2E2" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="ui-03" />,
          },
          {
            content: (
              <span>
                Subtle border; <br /> Tertiary background
              </span>
            ),
          },
          {
            content: <Content name="Gray 20" code="#CACACA" />,
          },
          {
            content: <SampleColor background="#CACACA" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="ui-04" />,
          },
          {
            content: (
              <span>
                3:1 AA element contrast;
                <br /> Medium contrast border
              </span>
            ),
          },
          {
            content: <Content name="Gray 40" code="#757575" />,
          },
          {
            content: <SampleColor background="#757575" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="ui-05" />,
          },
          {
            content: (
              <span>
                4.5:1 AA element contrast;
                <br />
                High contrast border;
                <br />
                Emphasis elements
              </span>
            ),
          },
          {
            content: <Content name="Gray 80" code="#444444" />,
          },
          {
            content: <SampleColor background="#444444" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="error" />,
          },
          {
            content: (
              <span>
                Danger button background; <br /> 3:1 AA contrast
              </span>
            ),
          },
          {
            content: <Content name="Red 60" code="#DA1E28" />,
          },
          {
            content: <SampleColor background="#DA1E28" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="warning" />,
          },
          {
            content: (
              <span>
                Danger button variant; <br /> Text; <br /> Icon;
                <br /> Border
              </span>
            ),
          },
          {
            content: <Content name="Yellow 60" code="#FBBD08" />,
          },
          {
            content: <SampleColor background="#FBBD08" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="success" />,
          },
          {
            content: (
              <span>
                Success button variant; <br /> Text; <br /> Icon;
                <br /> Border
              </span>
            ),
          },
          {
            content: <Content name="Green 50" code="#21BA45" />,
          },
          {
            content: <SampleColor background="#21BA45" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="info" />,
          },
          {
            content: (
              <span>
                Info button variant; <br /> Text; <br /> Icon;
                <br /> Border
              </span>
            ),
          },
          {
            content: <Content name="Blue 50" code="#00539A" />,
          },
          {
            content: <SampleColor background="#00539A" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="button-separator" />,
          },
          {
            content: (
              <span>
                3:1 AA element contrast;
                <br /> Fluid button separator
              </span>
            ),
          },
          {
            content: <Content name="Gray 20" code="#E0E0E0" />,
          },
          {
            content: <SampleColor background="#E0E0E0" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="primary-text" />,
          },
          {
            content: (
              <span>
                Primary text;
                <br /> Body copy;
                <br /> Headers;
                <br /> Hover text color for text-02
              </span>
            ),
          },
          {
            content: <Content name="Gray 100" code="#E2E2E2" />,
          },
          {
            content: <SampleColor background="#E2E2E2" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="Secondary-text" />,
          },
          {
            content: (
              <span>
                Secondary text; <br /> Input labels
              </span>
            ),
          },
          {
            content: <Content name="Gray 70" code="#565656" />,
          },
          {
            content: <SampleColor background="#565656" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="placeholder-text" />,
          },
          {
            content: 'Placeholder text',
          },
          {
            content: <Content name="Gray 40" code="#959595" />,
          },
          {
            content: <SampleColor background="#959595" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="inverse-text" />,
          },
          {
            content: 'Text on interactive colors',
          },
          {
            content: <Content name="White" code="#ffffff" />,
          },
          {
            content: (
              <SampleColor
                background="#ffffff"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="tertiary-text" />,
          },
          {
            content: (
              <span>
                Tertiary text; <br /> Help text
              </span>
            ),
          },
          {
            content: <Content name="Gray 40" code="#959595" />,
          },
          {
            content: <SampleColor background="#959595" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="icon-01" />,
          },
          {
            content: 'Primary icons',
          },
          {
            content: <Content name="Gray 80" code="#444444" />,
          },
          {
            content: <SampleColor background="#444444" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="icon-02" />,
          },
          {
            content: 'Secondary icon',
          },
          {
            content: <Content name="Gray 60" code="#686868" />,
          },
          {
            content: <SampleColor background="#686868" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="inverse-icon" />,
          },
          {
            content: (
              <span>
                Icons on interactive colors;
                <br />
                Icons on non-ui colors
              </span>
            ),
          },
          {
            content: <Content name="White" code="#ffffff" />,
          },
          {
            content: (
              <SampleColor
                background="#ffffff"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="overlay" />,
          },
          {
            content: 'Background overlay',
          },
          {
            content: <Content name="Gray 90" code="#161616 @ 50%" />,
          },
          {
            content: <SampleColor background="#343434" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="skeleton-01" />,
          },
          {
            content: 'Skeleton state of graphics',
          },
          {
            content: <Content name="Gray 10 hover" code="#e5e5e5" />,
          },
          {
            content: <SampleColor background="#e5e5e5" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="skeleton-02" />,
          },
          {
            content: 'Skeleton state of text',
          },
          {
            content: <Content name="Gray 30" code="#c6c6c6" />,
          },
          {
            content: <SampleColor background="#c6c6c6" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="disabled-01" />,
          },
          {
            content: (
              <span>
                Disabled fields;
                <br />
                Disabled backgrounds;
                <br />
                Disabled border <br />
              </span>
            ),
          },
          {
            content: <Content name="Gray 10" code="#f4f4f4" />,
          },
          {
            content: <SampleColor background="#E2E2E2" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="disabled-02" />,
          },
          {
            content: (
              <span>
                Disabled elements on $disabled-01;
                <br />
                Disabled label;
                <br />
                Disabled text on $disabled-01;
                <br />
                Disabled icons;
                <br />
                Disabled border <br />
              </span>
            ),
          },
          {
            content: <Content name="Gray 30" code="#c6c6c6" />,
          },
          {
            content: <SampleColor background="#c6c6c6" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="disabled-03" />,
          },
          {
            content: (
              <span>
                Disabled text on $disabled-02;
                <br />
                Disabled icons on $disabled-02 <br />
              </span>
            ),
          },
          {
            content: <Content name="Gray 50" code="#8d8d8d" />,
          },
          {
            content: <SampleColor background="#8d8d8d" type="circle" />,
          },
        ],
      ],
    }}
  />
);
