import React, { useRef, useEffect } from 'react';

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

  useEffect(() => {
    dropdownRef?.current?.addEventListener('change', _selectHandler);
    return () => {
      dropdownRef?.current?.removeEventListener('change', _selectHandler);
    };
  }, []);

  const _selectHandler = (event) => {
    const to = event.detail?.to;
    if (!to) return;
    history.push(to);
  };

  const _items =
    items?.map((item) => ({
      ...item,
      value: item.label,
    })) || [];

  const activeTheme = items.find((x) => x.isActive());

  return (
    <studs-dropdown
      class="theme-dropdown"
      ref={dropdownRef}
      size="small"
      selected={JSON.stringify(activeTheme)}
      onChange={_selectHandler}
      options={JSON.stringify(_items)}
    ></studs-dropdown>
  );
}
