import React from 'react';
import styles from './styles.module.scss';
import TypographySection from '../../TypoTable';

const dataDesktop = [
  {
    content: 'Label (Small)14px/.875rem',
    style: {
      fontSize: "14px",
      fontWeight: "500"
    }
  },
  {
    content: 'Label (Large) 16px/1rem',
    style: {
      fontSize: "14px",
      fontWeight: "500"
    }
  },
  {
    content: 'Input (Small) 14px/.875rem',
    style: {
      fontSize: "14px",
      fontWeight: "500"
    }
  },
  {
    content: 'Input (Medium) 15px/.938rem',
    style: {
      fontSize: "16px",
      fontWeight: "500"
    }
  },
  {
    content: 'Input (Large) 16px/1rem',
    style: {
      fontSize: "16px",
      fontWeight: "500"
    }
  },
  {
    content: 'Button Small 14px/.875rem Bold',
    style: {
      fontSize: "14px",
      fontWeight: "500"
    }
  },
  {
    content: 'Button Medium 15px/.938rem Bold',
    style: {
      fontSize: "15px",
      fontWeight: "500"
    }
  },
  {
    content: 'Button Large 16px/1rem Bold',
    style: {
      fontSize: "16px",
      fontWeight: "500"
    }
  },
  {
    content: 'body 16px/1rem',
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
    content: 'h6 18px/1.25rem bold',
    style: {
      fontSize: "18px",
      fontWeight: "700"
    }
  },
  {
    content: 'h5 20px/1.25rem',
    style: {
      fontSize: "20px",
      fontWeight: "500"
    }
  },
  {
    content: 'h4 24/1.5rem',
    style: {
      fontSize: "24px",
      fontWeight: "500"
    }
  },
  {
    content: 'h3 30px/1.75rem',
    style: {
      fontSize: "30px",
      fontWeight: "700"
    }
  },
  {
    content: 'h2 36px/2.25rem',
    style: {
      fontSize: "40px",
      fontWeight: "750"
    }
  },
  {
    content: 'h1 48px/3rem',
    style: {
      fontSize: "48px",
      fontWeight: "700"
    }
  },
  {
    content: 'h1(hero) 48px/3rem',
    style: {
      fontSize: "48px",
      fontWeight: "700"
    }
  },
];

export default function DesktopTypo(): JSX.Element {
    return (
      <TypographySection title={'Desktop, Laptop'} data={dataDesktop} />
    );
  }
  