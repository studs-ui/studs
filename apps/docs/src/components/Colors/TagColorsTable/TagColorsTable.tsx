import React from 'react';
import DesignGuideTable from '@site/src/components/DesignGuideTable/DesignGuideTable';
import SampleColor from '@site/src/components/SampleColor/SampleColor';
import ChipComponent from '../../ChipComponent';
import Content from '../../ContentComponent';

export const TagColorsTable = () => (
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
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Blue tag background',
          },
          {
            content: <Content name="Blue 20" code="#d0e2ff" />,
          },
          {
            content: <SampleColor background="#D0E2FF" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Blue tag text',
          },
          {
            content: <Content name="Blue 70" code="#0043ce" />,
          },
          {
            content: <SampleColor background="#0043ce" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Blue tag hover',
          },
          {
            content: <Content name="Blue hover" code="#b8d3ff" />,
          },
          {
            content: <SampleColor background="#b8d3ff" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Cyan tag background',
          },
          {
            content: <Content name="Cyan 20" code="#bae6ff" />,
          },
          {
            content: <SampleColor background="#bae6ff" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Cyan tag text',
          },
          {
            content: <Content name="Cyan 70" code="#00539a" />,
          },
          {
            content: <SampleColor background="#00539a" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Cyan tag hover',
          },
          {
            content: <Content name="Cyan hover" code="#99daff" />,
          },
          {
            content: <SampleColor background="#99daff" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Green tag background',
          },
          {
            content: <Content name="Green 20" code="#a7f0ba" />,
          },
          {
            content: <SampleColor background="#a7f0ba" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Green tag text',
          },
          {
            content: <Content name="Green 70" code="#0e6027" />,
          },
          {
            content: <SampleColor background="#0e6027" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Green tag hover',
          },
          {
            content: <Content name="Green hover" code="#74e792" />,
          },
          {
            content: <SampleColor background="#74e792" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Magenta tag background',
          },
          {
            content: <Content name="Magenta 20" code="#ffd6e8" />,
          },
          {
            content: <SampleColor background="#ffd6e8" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Magenta tag text',
          },
          {
            content: <Content name="Magenta 70" code="#9f1853" />,
          },
          {
            content: <SampleColor background="#9f1853" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Magenta tag hover',
          },
          {
            content: <Content name="Magenta hover" code="#ffbdda" />,
          },
          {
            content: <SampleColor background="#ffbdda" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Purple tag background',
          },
          {
            content: <Content name="Purple 20" code="#e8daff" />,
          },
          {
            content: <SampleColor background="#e8daff" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Purple tag text',
          },
          {
            content: <Content name="Purple 70" code="#6929c4" />,
          },
          {
            content: <SampleColor background="#6929c4" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Purple tag hover',
          },
          {
            content: <Content name="Purple hover" code="#dcc7ff" />,
          },
          {
            content: <SampleColor background="#dcc7ff" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Red tag background',
          },
          {
            content: <Content name="Red 20" code="#ffd7d9" />,
          },
          {
            content: <SampleColor background="#ffd7d9" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Red tag text',
          },
          {
            content: <Content name="Red 70" code="#a2191f" />,
          },
          {
            content: <SampleColor background="#a2191f" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Red tag hover',
          },
          {
            content: <Content name="Red hover" code="#ffc2c5" />,
          },
          {
            content: <SampleColor background="#ffc2c5" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Teal tag background',
          },
          {
            content: <Content name="Teal 20" code="#9ef0f0" />,
          },
          {
            content: <SampleColor background="#9ef0f0" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Teal tag text',
          },
          {
            content: <Content name="Teal 70" code="#005d5d" />,
          },
          {
            content: <SampleColor background="#005d5d" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Teal tag hover',
          },
          {
            content: <Content name="Teal hover" code="#57e5e5" />,
          },
          {
            content: <SampleColor background="#57e5e5" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Gray tag background',
          },
          {
            content: <Content name="Gray 20" code="#e0e0e0" />,
          },
          {
            content: <SampleColor background="#e0e0e0" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Gray tag text',
          },
          {
            content: <Content name="Gray 100" code="#161616" />,
          },
          {
            content: <SampleColor background="#161616" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Gray tag hover',
          },
          {
            content: <Content name="Gray hover" code="#d1d1d1" />,
          },
          {
            content: <SampleColor background="#d1d1d1" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Cool gray tag background',
          },
          {
            content: <Content name="Cool gray 20" code="#cdd3da" />,
          },
          {
            content: <SampleColor background="#cdd3da" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Cool gray tag text',
          },
          {
            content: <Content name="Cool gray 100" code="#121619" />,
          },
          {
            content: <SampleColor background="#121619" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Cool gray tag hover',
          },
          {
            content: <Content name="Cool gray hover" code="#c4c9d1" />,
          },
          {
            content: <SampleColor background="#c4c9d1" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Warm gray tag background',
          },
          {
            content: <Content name="Warm gray 20" code="#e5e0df" />,
          },
          {
            content: <SampleColor background="#e5e0df" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Warm gray tag text',
          },
          {
            content: <Content name="Warm gray 100" code="#171414" />,
          },
          {
            content: <SampleColor background="#171414" type="circle" />,
          },
        ],
        [
          {
            content: <ChipComponent text="$token" />,
          },
          {
            content: 'Warm gray tag hover',
          },
          {
            content: <Content name="Warm gray hover" code="#d8d0cf" />,
          },
          {
            content: <SampleColor background="#d8d0cf" type="circle" />,
          },
        ],
      ],
    }}
  />
);
