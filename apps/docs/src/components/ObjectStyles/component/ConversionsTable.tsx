import React from 'react';
// import DesignGuideTable from '../DesignGuideTable/DesignGuideTable';
import DesignGuideTable from '../../DesignGuideTable/DesignGuideTable';

const ConversionsTable = () => {
  return (
    <DesignGuideTable
      title=""
      data={{
        columns: [
          {
            title: 'PX',
            styles: {
              color: '#959595',
            },
          },
          {
            title: 'REM',
            styles: {
              color: '#959595',
            },
          },
        ],
        rows: [
          [
            {
              content: '2',
            },
            {
              content: '0.125',
            },
          ],
          [
            {
              content: '4',
            },
            {
              content: '0.25',
            },
          ],
          [
            {
              content: '8',
            },
            {
              content: '0.5',
            },
          ],
          [
            {
              content: '12',
            },
            {
              content: '0.75',
            },
          ],
          [
            {
              content: '16',
            },
            {
              content: '1',
            },
          ],
          [
            {
              content: '20',
            },
            {
              content: '1.25',
            },
          ],
          [
            {
              content: '24',
            },
            {
              content: '1.5',
            },
          ],
          [
            {
              content: '28',
            },
            {
              content: '1.75',
            },
          ],
          [
            {
              content: '32',
            },
            {
              content: '2',
            },
          ],
          [
            {
              content: '40',
            },
            {
              content: '2.5',
            },
          ],
          [
            {
              content: '48',
            },
            {
              content: '3',
            },
          ],
          [
            {
              content: '56',
            },
            {
              content: '3.5',
            },
          ],
          [
            {
              content: '64',
            },
            {
              content: '4',
            },
          ],
          [
            {
              content: '80',
            },
            {
              content: '5',
            },
          ],
          [
            {
              content: '96',
            },
            {
              content: '6',
            },
          ],
        ],
      }}
    />
  );
};

export default ConversionsTable;
