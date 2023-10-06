import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import { useDocsVersion } from '@docusaurus/theme-common/internal';
import { BASE_URL_GITHUB, BASE_URL_STRB, MAIN_GITHUB_URL } from '@site/src/utils/constants';
import React from 'react';
import styles from './styles.module.scss';

const HeaderComponent = ({ htmlTag, jsxTag, urlGithub, urlStrbook, status }) => {
  const { label: version, banner, badge, ...rest } = useDocsVersion();


  const tag = `<${htmlTag}>`;
  return (
    <div className={styles.header}>
      <code>
        {tag} | {jsxTag}
      </code>
      <div className={styles.wrapper}>
        {/* <studs-chip ref={ref} class="custom" variant="infor" size="small">
          {version || versionDefault}
        </studs-chip> */}
        <BrowserOnly>
          {() => {
          const StudsChip =
            require('@studs/react').StudsChip;
          return <StudsChip
          className={`custom ${styles.custom} ${styles[status.toLowerCase()]}`}
          size="small"
          selected
        >
          {status}
        </StudsChip>;
        }}
        </BrowserOnly>
        <Link
          to={urlGithub ? `${BASE_URL_GITHUB}/${urlGithub}`: MAIN_GITHUB_URL}
          target="_blank"
        >
          <studs-button button-type='link' size="small"><img src="/img/github.svg" alt="github" className={styles.img} /> Github</studs-button>
        </Link>
        <Link
          to={`${BASE_URL_STRB}/${urlStrbook}`}
          target="_blank"
        >
          <studs-button button-type='link' size="small">
          <img
            src="/img/storybook.svg"
            alt="storybook"
            className={styles.img}
          />
          Storybook
          </studs-button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
