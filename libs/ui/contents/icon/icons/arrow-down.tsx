import React from 'react';
export const ArrowDown = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width ?? '21'}
        height={props.height ?? '20'}
        viewBox='0 0 21 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M6.75 9L10.75 13L14.75 9'
            stroke={props.stroke ?? 'white'}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
);
