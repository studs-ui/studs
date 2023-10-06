import React from 'react';
import SizeConvert from './Device';
import ConversionsTable from './ConversionsTable';

const Utilities = () => {
  return (
    <>
    <div style={{paddingBottom: 24}}><img src="/img/row.svg" /></div>
    <div style={{ display: 'flex', width: '18.75rem' }}>
      <ConversionsTable />
      <SizeConvert />
    </div>
    </>
  );
};

export default Utilities;
