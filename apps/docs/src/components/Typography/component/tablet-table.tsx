import React from 'react';
import styles from './styles.module.css';
import TypographySection from '../../TypoTable';

const dataTablet = [
  {
    content: 'Label 14px/.875rem',
    style: {
      fontSize: "14px",
      fontWeight: "400"
    }
  },
  {
    content: 'Field Text 15px/.938rem',
    style: {
      fontSize: "15px",
      fontWeight: "400"
    }
  },
  {
    content: 'body copy 16px/1rem',
    style: {
      fontSize: "16px",
      fontWeight: "400"
    }
  },
  {
    content: 'body bold 16px/1rem',
    style: {
      fontSize: "16px",
      fontWeight: "700"
    }
  },
  {
    content: 'h5 18px/1.125rem',
    style: {
      fontSize: "18px",
      fontWeight: "500"
    }
  },
  {
    content: 'h4 20/1.25rem',
    style: {
      fontSize: "20px",
      fontWeight: "500"
    }
  },
  {
    content: 'h3 24px/1.5rem',
    style: {
      fontSize: "24px",
      fontWeight: "500"
    }
  },
  {
    content: 'h2 24px/1.5rem',
    style: {
      fontSize: "24px",
      fontWeight: "75p"
    }
  },
  {
    content: 'h1 28px/1.75rem',
    style: {
      fontSize: "28px",
      fontWeight: "700"
    }
  },
  {
    content: 'h1(hero) 28px/1.75rem',
    style: {
      fontSize: "28px",
      fontWeight: "700"
    }
  },
];

export default function TabletTable(): JSX.Element {
    return (
      <TypographySection title={'Desktop, Laptop'} data={dataTablet} />
    );
  }
  