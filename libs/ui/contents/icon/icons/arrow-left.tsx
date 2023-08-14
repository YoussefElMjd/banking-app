import React from 'react';
export const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width ?? '21'}
        height={props.height ?? '20'}
        viewBox='0 0 21 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M11.25 14L7.25 10L11.25 6'
            stroke={props.stroke ?? '#C2BCE4'}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
);
