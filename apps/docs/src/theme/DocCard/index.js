import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  findFirstCategoryLink,
  useDocById,
} from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

import CheckboxThumbnail from './component-images/_Checkbox base.svg'
import ArccordianThumbnail from './component-images/Accordian Block.svg'
import AlertThumbnail from './component-images/alert.svg'
import AlertBannerThumbnail from './component-images/AlertBanner-items.svg'
import ButtonThumbnail from './component-images/Button.svg'
import ChipThumbnail from './component-images/chip.svg'
import DropdownThumbnail from './component-images/Dropdown-input.svg'
import InputThumbnail from './component-images/Input.svg'
import PaneSliderThumbnail from './component-images/pane-slider.svg'
import RadioThumbnail from './component-images/Radio.svg'
import TabsThumbnail from './component-images/Tabs-Top.svg'
import ToastThumbnail from './component-images/toast.svg'
import ToggleThumbnail from './component-images/Toggle.svg'
import TooltipThumbnail from './component-images/Tooltip.svg'

const contentImages = {
  checkbox: CheckboxThumbnail,
  accordion: ArccordianThumbnail,
  alert: AlertThumbnail,
  alert_banner: AlertBannerThumbnail,
  button: ButtonThumbnail,
  chip: ChipThumbnail,
  dropdown: DropdownThumbnail,
  input: InputThumbnail,
  paneSlider: PaneSliderThumbnail,
  radio: RadioThumbnail,
  tabs: TabsThumbnail,
  toast: ToastThumbnail,
  switch: ToggleThumbnail,
  tooltip: TooltipThumbnail,
}

function CardContainer({ href, children }) {
  return (
    <Link
      href={href}
      className={clsx('card padding--lg', styles.cardContainer)}>
      {children}
    </Link>
  );
}
function CardLayout({ href, icon, title, description, isInComponents }) {

  // custom card for components
  if (isInComponents) {
    const PreviewSvg = contentImages[title.toLowerCase().replace(/ /g, '_')];
    return (
      <CardContainer href={href}>
        <div className={styles.cardThumbnail}>
          {!!PreviewSvg ? <PreviewSvg /> : icon}
        </div>
        <h2 className={clsx('text--truncate', styles.cardTitle)} title={title}>
          {title}
        </h2>
        {description && (
          <p
            className={clsx('text--truncate', styles.cardDescription)}
            title={description}>
            {description}
          </p>
        )}
      </CardContainer>
    );
  }

  // original card
  return (
    <CardContainer href={href}>
      <h2 className={clsx('text--truncate', styles.cardTitle)} title={title}>
        {icon} {title}
      </h2>
      {description && (
        <p
          className={clsx('text--truncate', styles.cardDescription)}
          title={description}>
          {description}
        </p>
      )}
    </CardContainer>
  );
}
function CardCategory({ item }) {
  const href = findFirstCategoryLink(item);
  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  return (
    <CardLayout
      href={href}
      icon="🗃️"
      title={item.label}
      description={
        item.description ??
        translate(
          {
            message: '{count} items',
            id: 'theme.docs.DocCard.categoryDescription',
            description:
              'The default description for a category card in the generated index about how many items this category includes',
          },
          { count: item.items.length },
        )
      }
    />
  );
}
function CardLink({ item }) {
  const icon = isInternalUrl(item.href) ? '📄️' : '🔗';
  const doc = useDocById(item.docId ?? undefined);
  const isInComponents = item?.docId?.includes('components/');
  return (
    <CardLayout
      href={item.href}
      icon={icon}
      title={item.label}
      description={item.description ?? doc?.description}
      isInComponents={isInComponents}
    />
  );
}
export default function DocCard({ item }) {

  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
