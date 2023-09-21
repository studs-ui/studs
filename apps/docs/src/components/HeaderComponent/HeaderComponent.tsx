import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import useOnScreen from '@site/src/hooks/use0nScreen';
import { useDocsVersion } from '@docusaurus/theme-common/internal';

const HeaderComponent = ({ htmlTag, jsxTag }) => {
  const { label: version, banner, badge, ...rest } = useDocsVersion();
  const isUnreleased = banner === 'unreleased';

  const tag = `<${htmlTag}>`;
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    const query = document.querySelectorAll('.custom');
    query.forEach((item) => {
      const statusElement = item.shadowRoot.querySelector('.chip');
      const versionElement = item.shadowRoot.querySelector('.-infor');
      statusElement?.setAttribute(
        'style',
        'border-radius: 1rem; padding: 0.25rem 0.5rem'
      );
      versionElement?.setAttribute(
        'style',
        'background-color: #444444; color: #fff; border: transparent; border-radius: 1rem; padding: 0.25rem 0.5rem'
      );
    });
  }, [isVisible]);

  return (
    <div className={styles.header}>
      <code>
        {tag} | {jsxTag}
      </code>
      <div>
        <studs-chip ref={ref} class="custom" variant="infor" size="small">
          {version}
        </studs-chip>

        <studs-chip
          ref={ref}
          class={`custom ${styles.custom}`}
          size="small"
          selected
        >
          {isUnreleased ? 'Unstable' : 'Stable'}
        </studs-chip>
      </div>
    </div>
  );
};

export default HeaderComponent;
