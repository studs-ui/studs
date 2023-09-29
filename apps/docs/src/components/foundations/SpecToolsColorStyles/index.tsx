import React from 'react';
import styles from './styles.module.css';
import { TextColorStyles } from './components/TextColorStyles';
import { PrimaryColorStyles } from './components/PrimaryColorStyles';
import { ActionColorStyles } from './components/ActionColorStyles';
import { BackgroundColorStyles } from './components/BackgroundColorStyles';
import { OtherMiscColorStyles } from './components/OtherMiscColorStyles';
import { SecondaryColorStyles } from './components/SecondaryColorStyles';
import { TertiaryColorStyles } from './components/TertiaryColorStyles';
import { SupplementalColorStyles } from './components/SupplementalColorStyles';

export default function SpecToolsColorStyles(): JSX.Element {
  return (
    <section className={styles.features}>
      <TextColorStyles />
      <PrimaryColorStyles />
      <SecondaryColorStyles />
      <TertiaryColorStyles />
      <SupplementalColorStyles />
      <ActionColorStyles />
      <BackgroundColorStyles />
      <OtherMiscColorStyles />
    </section>
  );
}
