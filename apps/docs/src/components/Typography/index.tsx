import React from 'react';
import styles from './styles.module.scss';
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
