import React from 'react';
export const ArrowPropertyUp = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width ?? '17'}
        height={props.height ?? '16'}
        viewBox='0 0 17 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M5.58984 10.6611L11.4111 4.83984'
            stroke={props.stroke ?? '#1F1750'}
            stroke-width='1.55234'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M6.58984 4.83984H11.4111V9.66113'
            stroke={props.stroke ?? '#1F1750'}
            stroke-width='1.55234'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
);
export const ArrowPropertyDown = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width ?? '17'}
        height={props.height ?? '16'}
        viewBox='0 0 17 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M5.83984 10.9111L11.6611 5.08984'
            stroke={props.stroke ?? '#1F1750'}
            stroke-width='1.55234'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M5.83984 6.08984V10.9111H10.6611'
            stroke={props.stroke ?? '#1F1750'}
            stroke-width='1.55234'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
);
