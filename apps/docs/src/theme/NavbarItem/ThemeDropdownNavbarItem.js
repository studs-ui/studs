import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useEffect, useState } from 'react';

const mapItems = (options, defaultSelected) =>
  options.map((opt) => {
    return {
      label: opt.label,
      value: opt.label,
      // preserve ?search#hash suffix on version switches
      // to: `${versionDoc.path}${search}${hash}`,
      isActive: () => {
        if (opt.label === defaultSelected) {
          return true;
        }

        return false;
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
  const items = [...mapItems(options, defaultSelected)];
  const dropdownRef = useRef();

  const [activeTheme, setActiveTheme] = useState(
    items.find((x) => x.isActive())
  );

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add(activeTheme.value.replaceAll(' ', '-').toLowerCase());
    dropdownRef?.current?.addEventListener('change', _selectHandler);
    return () => {
      dropdownRef?.current?.removeEventListener('change', _selectHandler);
    };
  }, []);

  const _selectHandler = (event) => {
    const body = document.querySelector('body');
    const theme = event.detail?.value.replaceAll(' ', '-').toLowerCase();
    setActiveTheme((prev) => {
      if (
        body.classList.contains(prev.value.replaceAll(' ', '-').toLowerCase())
      ) {
        body.classList.remove(prev.value.replaceAll(' ', '-').toLowerCase());
      }
      body.classList.add(theme);
      return event.detail;
    });
    window.localStorage.setItem('activeTheme', event.detail.value);
  };

  const _items =
    items?.map((item) => ({
      ...item,
      value: item.label,
    })) || [];

  return (
    <BrowserOnly>
      {() => {
        const StudsDropdown = require('@studs/react').StudsDropdown;
        return (
          <StudsDropdown
            class="theme-dropdown"
            size="small"
            selected={activeTheme.value}
            onChange={_selectHandler}
            options={_items}
          ></StudsDropdown>
        );
      }}
    </BrowserOnly>
  );
}
