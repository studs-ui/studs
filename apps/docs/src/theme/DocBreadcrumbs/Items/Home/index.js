import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { translate } from '@docusaurus/Translate';
import IconHome from '@theme/Icon/Home';

export default function HomeBreadcrumbItem() {
  const homeHref = useBaseUrl('/');
  return (
    <a href={homeHref} aria-label={translate({
      id: 'theme.docs.breadcrumbs.home',
      message: 'Home page',
      description: 'The ARIA label for the home page in the breadcrumbs',
    })}>
      <IconHome style={{
        position: 'relative',
        top: '1px',
        verticalAlign: 'top',
        height: '1.6rem',
        width: '1.1rem'
      }} />
    </a>
  );
}
