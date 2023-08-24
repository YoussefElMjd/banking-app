import React from 'react';
export const Nfc = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width ?? '24'}
        height={props.height ?? '25'}
        viewBox='0 0 24 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M12.1604 4.97266C15.4804 9.27266 15.4804 14.8627 12.1604 19.1627'
            stroke={props.stroke ?? '#625C87'}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M15.6404 2.0625C20.3204 8.1225 20.3204 16.0025 15.6404 22.0625'
            stroke={props.stroke ?? '#625C87'}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M8.50984 6.85254C10.9498 10.0025 10.9498 14.1125 8.50984 17.2625'
            stroke={props.stroke ?? '#625C87'}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M4.85062 9.4624C6.07063 11.0424 6.07063 13.0924 4.85062 14.6724'
            stroke={props.stroke ?? '#625C87'}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
);
