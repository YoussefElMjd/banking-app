import React from 'react';
export const RadioInputOff = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width ?? '17'}
        height={props.height ?? '16'}
        viewBox='0 0 17 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <rect
            x='1.25'
            y='1'
            width='14.0001'
            height='14'
            rx='7'
            stroke={props.stroke ?? '#2DD7AE'}
            stroke-width='2'
        />
    </svg>
);
export const RadioInputOn = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width ?? '17'}
        height={props.height ?? '16'}
        viewBox='0 0 17 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <rect
            x='0.25'
            width='16.0001'
            height='16'
            rx='8'
            fill={props.fill ?? '#2DD7AE'}
        />
        <circle cx='8.25' cy='8' r='3' fill='white' />
    </svg>
);
