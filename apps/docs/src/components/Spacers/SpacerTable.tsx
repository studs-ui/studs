import React from 'react';
import DesignGuideTable from '../DesignGuideTable/DesignGuideTable';
import ChipComponent from '../ChipComponent';
import SpacerExample from './SpacerExample';
import SampleColor from '../SampleColor/SampleColor';

const SpacersTable = () => {
  return (
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
            title: 'rem',
            styles: {
              width: ' 35%',
            },
          },
          {
            title: 'px',
            styles: {
              width: ' 30%',
            },
          },
          {
            title: 'Example',
          },
        ],
        rows: [
          [
            {
              content: <ChipComponent text="$spacing-01" />,
            },
            {
              content: '0.125',
            },
            {
              content: '2',
            },
            {
              content: <SpacerExample number={2} />,
            },
          ],
          [
            {
              content: <ChipComponent text="$spacing-02" />,
            },
            {
              content: '0.25',
            },
            {
              content: '4',
            },
            {
              content: <SpacerExample number={4} />,
            },
          ],
          [
            {
              content: <ChipComponent text="$spacing-03" />,
            },
            {
              content: '0.5',
            },
            {
              content: '8',
            },
            {
              content: <SpacerExample number={8} fontSize={4} />,
            },
          ],
          [
            {
              content: <ChipComponent text="$spacing-04" />,
            },
            {
              content: '0.75',
            },
            {
              content: '12',
            },
            {
              content: <SpacerExample number={12} fontSize={8} />,
            },
          ],
          [
            {
              content: <ChipComponent text="$spacing-05" />,
            },
            {
              content: '1',
            },
            {
              content: '16',
            },
            {
              content: <SpacerExample number={16} fontSize={8} />,
            },
          ],
          [
            {
              content: <ChipComponent text="$spacing-06" />,
            },
            {
              content: '1.5',
            },
            {
              content: '24',
            },
            {
              content: <SpacerExample number={24} fontSize={8} />,
            },
          ],
          [
            {
              content: <ChipComponent text="$spacing-07" />,
            },
            {
              content: '2',
            },
            {
              content: '32',
            },
            {
              content: <SpacerExample number={32} fontSize={8} />,
            },
          ],
          [
            {
              content: <ChipComponent text="$spacing-08" />,
            },
            {
              content: '2.5',
            },
            {
              content: '40',
            },
            {
              content: <SpacerExample number={40} fontSize={8} />,
            },
          ],
          [
            {
              content: <ChipComponent text="$spacing-09" />,
            },
            {
              content: '3',
            },
            {
              content: '48',
            },
            {
              content: <SpacerExample number={48} fontSize={8} />,
            },
          ],
          [
            {
              content: <ChipComponent text="$spacing-10" />,
            },
            {
              content: '4',
            },
            {
              content: '64',
            },
            {
              content: <SpacerExample number={64} fontSize={8} />,
            },
          ],
          [
            {
              content: <ChipComponent text="$spacing-11" />,
            },
            {
              content: '5',
            },
            {
              content: '80',
            },
            {
              content: <SpacerExample number={80} fontSize={8} />,
            },
          ],
          [
            {
              content: <ChipComponent text="$spacing-12" />,
            },
            {
              content: '6',
            },
            {
              content: '96',
            },
            {
              content: <SpacerExample number={96} fontSize={8} />,
            },
          ],
          [
            {
              content: <ChipComponent text="$spacing-13" />,
            },
            {
              content: '10',
            },
            {
              content: '160',
            },
            {
              content: <SpacerExample number={160} fontSize={8} />,
            },
          ],
        ],
      }}
    />
  );
};

export default SpacersTable;
