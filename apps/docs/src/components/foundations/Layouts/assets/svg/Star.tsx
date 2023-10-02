import * as React from 'react';
import { SVGProps } from 'react';

const Star = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    {...props}
  >
    <path
      fill="#323232"
      d="m117.333 49.28-38.346-3.307L64 10.667l-14.987 35.36-38.346 3.253 29.12 25.227L31.04 112 64 92.107 96.96 112l-8.693-37.493 29.066-25.227ZM64 82.133 43.947 94.24l5.333-22.827-17.707-15.36 23.36-2.026L64 32.533l9.12 21.547 23.36 2.027-17.707 15.36 5.334 22.826L64 82.133Z"
    />
  </svg>
);

export default Star;
