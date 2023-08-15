import React from 'react';
export const CheckboxOff = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width ?? '21'}
        height={props.height ?? '20'}
        viewBox='0 0 21 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <rect
            x='1.75'
            y='1'
            width='18'
            height='18'
            rx='5'
            fill-opacity='0.1'
            stroke={props.stroke ?? '#2DD7AE'}
            stroke-width='2'
        />
    </svg>
);
export const CheckboxOn = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width ?? '21'}
        height={props.height ?? '20'}
        viewBox='0 0 21 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <rect
            x='0.75'
            width='20'
            height='20'
            rx='6'
            fill={props.fill ?? '#2DD7AE'}
        />
        <path
            d='M6.75 9.767L9.57353 12.5905L14.75 7.41406'
            stroke={props.stroke ?? '#1F1750'}
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
);
