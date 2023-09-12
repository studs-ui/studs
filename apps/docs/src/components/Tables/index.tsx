import React from 'react';

type TablesProps = {
  args: Array<argsType>;
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
  reflects?: string | undefined;
  type?: string | undefined;
  arguments?: string | undefined;
  default?: React.ReactNode | undefined;
};

const Tables = (props: TablesProps) => {
  const { args = [], headers = [] } = props;

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
          {args.map((row, idx) => (
            <tr key={idx}>
              {headers.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </studs-table>
  );
};

export default Tables;
