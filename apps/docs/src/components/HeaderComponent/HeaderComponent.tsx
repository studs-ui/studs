import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import useOnScreen from '@site/src/hooks/use0nScreen';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import { BASE_URL_GITHUB, BASE_URL_STRB } from '@site/src/utils/constants';

const HeaderComponent = ({ htmlTag, jsxTag, urlGithub, urlStrbook }) => {
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
        'background-color: #444444; color: #fff; border: 1px solid transparent; border-radius: 1rem; padding: 0.25rem 0.5rem'
      );
    });
  }, [isVisible]);

  return (
    <div className={styles.header}>
      <code>
        {tag} | {jsxTag}
      </code>
      <div className={styles.wrapper}>
        {/* <studs-chip ref={ref} class="custom" variant="infor" size="small">
          {version || versionDefault}
        </studs-chip> */}

        <studs-chip
          ref={ref}
          style={{ display: 'inherit' }}
          class={`custom ${styles.custom}`}
          size="small"
          selected
        >
          {isUnreleased ? 'Unstable' : 'Stable'}
        </studs-chip>
        <Link
          to={`${BASE_URL_GITHUB}/${urlGithub}`}
          target="_blank"
          className={styles.wrapper}
        >
          <img src="/img/github.svg" alt="github" className={styles.img} />
          <span>Github</span>
        </Link>
        <Link
          className={`${styles.custom} ${styles.wrapper}`}
          to={`${BASE_URL_STRB}/${urlStrbook}`}
          target="_blank"
        >
          <img
            src="/img/storybook.svg"
            alt="storybook"
            className={styles.img}
          />
          <span>Storybook</span>
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
