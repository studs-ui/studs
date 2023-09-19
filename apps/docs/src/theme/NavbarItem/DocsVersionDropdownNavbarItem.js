import React, { useRef, useEffect } from 'react';
import {
  useVersions,
  useActiveDocContext,
} from '@docusaurus/plugin-content-docs/client';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import { useLocation } from '@docusaurus/router';

const getVersionMainDoc = (version) =>
  version.docs.find((doc) => doc.id === version.mainDocId);
export default function DocsVersionDropdownNavbarItem({
  mobile,
  docsPluginId,
  dropdownActiveClassDisabled,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}) {
  const { search, hash } = useLocation();
  const activeDocContext = useActiveDocContext(docsPluginId);
  const versions = useVersions(docsPluginId);
  const { savePreferredVersionName } = useDocsPreferredVersion(docsPluginId);
  const versionLinks = versions.map((version) => {
    // We try to link to the same doc, in another version
    // When not possible, fallback to the "main doc" of the version
    const versionDoc =
      activeDocContext.alternateDocVersions[version.name] ??
      getVersionMainDoc(version);
    return {
      label: version.label,
      // preserve ?search#hash suffix on version switches
      to: `${versionDoc.path}${search}${hash}`,
      isActive: () => version === activeDocContext.activeVersion,
      onClick: () => savePreferredVersionName(version.name),
    };
  });
  const items = [
    ...dropdownItemsBefore,
    ...versionLinks,
    ...dropdownItemsAfter,
  ];
  const dropdownRef = useRef();

  useEffect(() => {
    dropdownRef?.current?.addEventListener('change', _selectHandler);
    return () => {
      dropdownRef?.current?.removeEventListener('change', _selectHandler);
    }
  }, []);

  const _selectHandler = (event) => {
    const to = event.detail?.to;
    if (!to) return;
    location.href = to;
  }

  const _items = items?.map(item => ({
    ...item,
    value: item.label,
  })) || []

  return (
    <studs-dropdown
      ref={dropdownRef}
      size="small"
      onChange={_selectHandler}
      options={JSON.stringify(_items)}
    ></studs-dropdown>
  );
}
