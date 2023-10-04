import React from 'react';
import styles from './styles.module.css';
import DesktopTypo from './component/desktop-table';
import TabletTable from './component/tablet-table';

export default function TypographySection(): JSX.Element {
  return (
    <>
      <DesktopTypo />
      <TabletTable />
    </>
  );
}
