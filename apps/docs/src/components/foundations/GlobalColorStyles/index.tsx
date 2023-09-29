import React from 'react';
import styles from './styles.module.css';
import { TextColorStyles } from './components/TextColorStyles';
import { PrimaryColorStyles } from './components/PrimaryColorStyles';
import { ErrorColorStyles } from './components/ErrorColorStyles';
import { WarningColorStyles } from './components/WarningColorStyles';
import { InfoColorStyles } from './components/InfoColorStyles';
import { SuccessColorStyles } from './components/SuccessColorStyles';
import { ActionColorStyles } from './components/ActionColorStyles';
import { BackgroundColorStyles } from './components/BackgroundColorStyles';
import { OtherMiscColorStyles } from './components/OtherMiscColorStyles';

export default function GlobalColorStyles(): JSX.Element {
  return (
    <section className={styles.features}>
      <TextColorStyles />
      <PrimaryColorStyles />
      <ErrorColorStyles />
      <WarningColorStyles />
      <InfoColorStyles />
      <SuccessColorStyles />
      <ActionColorStyles />
      <BackgroundColorStyles />
      <OtherMiscColorStyles />
    </section>
  );
}
