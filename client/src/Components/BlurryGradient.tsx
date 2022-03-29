import React from 'react';
import './BlurryGradient.style.css';

function BlurryGradient() {
  return (
    <svg
      viewBox="0 0 1220 1169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="blurry"
    >
      <g filter="url(#filter0_f_306_2)">
        <circle cx="610" cy="610" r="410" fill="url(#paint0_linear_306_2)" />
      </g>
      <g filter="url(#filter1_f_306_2)">
        <circle cx="751" cy="451" r="300" fill="url(#paint1_linear_306_2)" />
      </g>
      <defs>
        <filter
          id="filter0_f_306_2"
          x="0"
          y="0"
          width="1220"
          height="1220"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_306_2"
          />
        </filter>
        <filter
          id="filter1_f_306_2"
          x="351"
          y="51"
          width="800"
          height="800"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_306_2"
          />
        </filter>
        <linearGradient
          id="paint0_linear_306_2"
          x1="610"
          y1="200"
          x2="610"
          y2="1020"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF7BCA" />
          <stop offset="1" stopColor="#FFC56F" stopOpacity="0.46" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_306_2"
          x1="751"
          y1="151"
          x2="751"
          y2="751"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F22FB0" />
          <stop offset="1" stopColor="#F58A25" stopOpacity="0" />
          <stop offset="1" stopColor="#7061A3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default BlurryGradient;
