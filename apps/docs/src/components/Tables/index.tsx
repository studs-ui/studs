import React, { useMemo } from 'react';
import { FORM_PROPS } from '@site/src/utils/constants';

type TablesProps = {
  args: Array<argsType>;
  includesFormProps?: boolean;
  headers: Array<
    'name' | 'description' | 'reflects' | 'type' | 'arguments' | 'default'
  >;
};

enum STABLE_HEADERS {
  'name' = 'Name',
  'description' = 'Description',
  'reflects' = 'Reflects',
  'type' = 'Type',
  'default' = 'Default',
  'arguments' = 'Arguments',
}

type argsType = {
  name?: string | undefined;
  description?: JSX.Element | undefined;
  reflects?: boolean | undefined;
  type?: string | undefined;
  arguments?: string | undefined;
  default?: React.ReactNode | undefined;
};

const Tables = (props: TablesProps) => {
  const { args = [], headers = [], includesFormProps } = props;

  const mergedArgs = includesFormProps ? [...FORM_PROPS, ...args] : args;

  const mapColumn = useMemo(
    () => (row: argsType, colName: string) => {
      if (colName === 'description' || colName === 'reflects') {
        return row[colName];
      }

      if (!row[colName]) {
        return '-';
      }

      return (
        <code
          style={{
            backgroundColor: 'rgba(0 0 0 / 0.025)',
            backgroundBlendMode: 'darken',
            borderRadius: '0.25rem',
            padding: '0.125em 0.25em',
          }}
        >
          {row[colName]}
        </code>
      );
    },
    []
  );

  return (
    <studs-table>
      <table style={{ maxWidth: '100%', overflowX: 'auto' }}>
        <thead>
          <tr>
            {headers.map((col) => (
              <th key={col}>{STABLE_HEADERS[col]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mergedArgs.map((row, idx) => (
            <tr key={idx}>
              {headers.map((col) => (
                <td key={col}>{mapColumn(row, col)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </studs-table>
  );
};

export default Tables;
