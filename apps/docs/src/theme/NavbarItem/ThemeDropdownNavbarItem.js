import React, { useRef, useEffect, useState } from 'react';

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
  const dropdownRef = useRef();

  const [activeTheme, setActiveTheme] = useState(items.find((x) => x.isActive()));

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add(activeTheme.value.replaceAll(" ", "-").toLowerCase());
    dropdownRef?.current?.addEventListener('change', _selectHandler);
    return () => {
      dropdownRef?.current?.removeEventListener('change', _selectHandler);
    };
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
    // const to = event.detail?.to;
    // if (!to) return;
    // history.push(to);
  };

  const _items =
    items?.map((item) => ({
      ...item,
      value: item.label,
    })) || [];

  return (
    <studs-dropdown
      class="theme-dropdown"
      ref={dropdownRef}
      size="small"
      selected={JSON.stringify(activeTheme.value)}
      onChange={_selectHandler}
      options={JSON.stringify(_items)}
    ></studs-dropdown>
  );
}
