import React from 'react';
export const SwitchInputOff = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width ?? '33'}
        height={props.height ?? '16'}
        viewBox='0 0 33 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <rect
            x='0.75'
            width='32'
            height='16'
            rx='8'
            fill={props.fill ?? '#1F1750'}
        />
        <rect
            x='4.75'
            y='4'
            width='8'
            height='8'
            rx='4'
            fill={props.fill ?? '#2DD7AE'}
        />
    </svg>
);
export const SwitchInputOn = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width ?? '33'}
        height={props.height ?? '16'}
        viewBox='0 0 33 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <rect
            x='0.75'
            width='32'
            height='16'
            rx='8'
            fill={props.fill ?? '#2DD7AE'}
        />
        <rect
            x='20.75'
            y='4'
            width='8'
            height='8'
            rx='4'
            fill={props.fill ?? '#1F1750'}
        />
    </svg>
);
