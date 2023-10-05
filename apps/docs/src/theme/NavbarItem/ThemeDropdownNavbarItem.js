import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useEffect, useState } from 'react';

const THEME_DROPDOWN_DEFAULT_SELECTED = 2;

const mapItems = (options) =>
  options.map((opt, idx) => {
    return {
      label: opt.label,
      value: opt.label,
      // preserve ?search#hash suffix on version switches
      // to: `${versionDoc.path}${search}${hash}`,
      isActive: () => {
        if (idx === THEME_DROPDOWN_DEFAULT_SELECTED) {
          return true;
        }
      },
      onClick: () => {},
    };
  });

export default function ThemeDropdownNavbarItem({
  mobile,
  options,
  dropdownActiveClassDisabled,
  defaultSelected,
  ...props
}) {
  const items = [...mapItems(options)];

  const [activeTheme, setActiveTheme] = useState(items.find((x) => x.isActive()));

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add(activeTheme.value.replaceAll(" ", "-").toLowerCase());
  }, []);

  const _selectHandler = (event) => {
    const body = document.querySelector('body');
    const theme = event.detail?.value.replaceAll(" ", "-").toLowerCase();
    setActiveTheme((prev) => {
      if(body.classList.contains(prev.value.replaceAll(" ", "-").toLowerCase())) {
        body.classList.remove(prev.value.replaceAll(" ", "-").toLowerCase());
      }
      body.classList.add(theme);
      return event.detail;
    })
  };

  const _items =
    items?.map((item) => ({
      ...item,
      value: item.label,
    })) || [];

  return (
    <BrowserOnly>
    {() => {
    const StudsDropdown =
      require('@studs/react').StudsDropdown;
      return <StudsDropdown
      class="theme-dropdown"
      size="small"
      selected={activeTheme.value}
      onChange={_selectHandler}
      options={_items}
    ></StudsDropdown>;
  }}
  </BrowserOnly>
  );
}
