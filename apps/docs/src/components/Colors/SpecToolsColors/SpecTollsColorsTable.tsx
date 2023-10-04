import React from 'react';
import DesignGuideTable from '@site/src/components/DesignGuideTable/DesignGuideTable';
import SampleColor from '@site/src/components/SampleColor/SampleColor';
import ChipComponent from '../../ChipComponent';
import Content from '../../ContentComponent';

export const SpecToolsColorsTable = () => (
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
            content: <ChipComponent text="primary-default" />,
          },
          {
            content: (
              <span>
                Primary interactive color;
                <br />
                Primary buttons
              </span>
            ),
          },
          {
            content: <Content name="Gray 00" code="#F4F4F4" />,
          },
          {
            content: (
              <SampleColor
                background="#F4F4F4"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="primary-hover" />,
          },
          {
            content: (
              <span>
                Primary hover color; <br /> Primary buttons
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
            content: <ChipComponent text="primary-active" />,
          },
          {
            content: (
              <span>
                Primary active color; <br /> Primary buttons
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
            content: <ChipComponent text="primary-focus" />,
          },
          {
            content: (
              <span>
                Primary active color; <br /> Primary buttons
              </span>
            ),
          },
          {
            content: <Content name="Gray 10" code="#E2E2E2" />,
          },
          {
            content: (
              <SampleColor
                background="#E2E2E2"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="primary-disabled" />,
          },
          {
            content: (
              <span>
                Primary disabled color; <br /> Primary buttons
              </span>
            ),
          },
          {
            content: <Content name="Gray 10" code="#E2E2E2" />,
          },
          {
            content: (
              <SampleColor
                background="#E2E2E2"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="$link-01" />,
          },
          {
            content: (
              <span>
                Primary links; <br /> Ghost button
              </span>
            ),
          },
          {
            content: <Content name="Blue 60" code="#0f62fe" />,
          },
          {
            content: (
              <SampleColor
                background="#0f62fe"
                border="1px #E0E0E0 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="secondary-default" />,
          },
          {
            content: (
              <span>
                Secondary interactive color;
                <br />
                Primary buttons
              </span>
            ),
          },
          {
            content: <Content name="Gray 00" code="#F4F4F4" />,
          },
          {
            content: (
              <SampleColor
                background="#F4F4F4"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="secondary-hover" />,
          },
          {
            content: (
              <span>
                Primary hover color; <br />
                Primary buttons
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
            content: <ChipComponent text="secondary-active" />,
          },
          {
            content: (
              <span>
                Primary active color;
                <br />
                Primary buttons
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
            content: <ChipComponent text="secondary-focus" />,
          },
          {
            content: (
              <span>
                Primary active color;
                <br />
                Primary buttons
              </span>
            ),
          },
          {
            content: <Content name="Gray 10" code="#E2E2E2" />,
          },
          {
            content: (
              <SampleColor
                background="#E2E2E2"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="secondary-disabled" />,
          },
          {
            content: (
              <span>
                Primary disabled color;
                <br /> Primary buttons
              </span>
            ),
          },
          {
            content: <Content name="Gray 10" code="#E2E2E2" />,
          },
          {
            content: (
              <SampleColor
                background="#E2E2E2"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="$link-02" />,
          },
          {
            content: 'Secondary link color for lower contrast backgrounds',
          },
          {
            content: <Content name="Blue 70" code="#0043ce" />,
          },
          {
            content: (
              <SampleColor
                background="#0043ce"
                border="1px #E0E0E0 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="tertiary-default" />,
          },
          {
            content: (
              <span>
                Secondary interactive color;
                <br />
                Primary buttons
              </span>
            ),
          },
          {
            content: <Content name="Gray 00" code="#F4F4F4" />,
          },
          {
            content: (
              <SampleColor
                background="#F4F4F4"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="tertiary-hover" />,
          },
          {
            content: (
              <span>
                Secondary hover color;
                <br />
                Primary buttons
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
            content: <ChipComponent text="tertiary-active" />,
          },
          {
            content: (
              <span>
                Secondary active color;
                <br />
                Primary buttons
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
            content: <ChipComponent text="tertiary-focus" />,
          },
          {
            content: (
              <span>
                Secondary active color;
                <br />
                Primary buttons
              </span>
            ),
          },
          {
            content: <Content name="Gray 10" code="#E2E2E2" />,
          },
          {
            content: (
              <SampleColor
                background="#E2E2E2"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="tertiary-disabled" />,
          },
          {
            content: (
              <span>
                Secondary disabled color;
                <br />
                Primary buttons
              </span>
            ),
          },
          {
            content: <Content name="Gray 10" code="#E2E2E2" />,
          },
          {
            content: (
              <SampleColor
                background="#E2E2E2"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="hover-selected-ui" />,
          },
          {
            content: (
              <span>
                Primary text;
                <br />
                Body copy;
                <br />
                Headers;
                <br />
                Hover text color for text-02
              </span>
            ),
          },
          {
            content: <Content name="Gray 100" code="#E2E2E2" />,
          },
          {
            content: (
              <SampleColor
                background="#1D1D1D"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="hover-danger" />,
          },
          {
            content: (
              <span>
                Secondary text
                <br />
                Input labels
              </span>
            ),
          },
          {
            content: <Content name="Gray 70" code="#5656" />,
          },
          {
            content: (
              <SampleColor
                background="#565656"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="hover-row" />,
          },
          {
            content: 'Row hover',
          },
          {
            content: <Content name="Gray 40" code="#959595" />,
          },
          {
            content: (
              <SampleColor
                background="#959595"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="inverse-hover-ui" />,
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
                background="#FFFFFF"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
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
            content: (
              <SampleColor
                background="#444444"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="icon-02" />,
          },
          {
            content: 'Secondary icons',
          },
          {
            content: <Content name="Gray 60" code="#686868" />,
          },
          {
            content: (
              <SampleColor
                background="#686868"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="inserve-icon" />,
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
                background="#FFFFFF"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="visited-link" />,
          },
          {
            content: 'Visited links',
          },
          {
            content: <Content name="Blue 60" code="#00539A" />,
          },
          {
            content: (
              <SampleColor
                background="#00539A"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
        [
          {
            content: <ChipComponent text="inverse-link" />,
          },
          {
            content: 'Links on $inverse-02 backgrounds',
          },
          {
            content: <Content name="Blue 40" code="#78a9ff" />,
          },
          {
            content: (
              <SampleColor
                background="#78a9ff"
                border="1px #E2E2E2 solid"
                type="circle"
              />
            ),
          },
        ],
      ],
    }}
  />
);
