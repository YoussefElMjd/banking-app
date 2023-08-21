import React from 'react';
export const Transaction = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width ?? '25'}
        height={props.height ?? '25'}
        viewBox='0 0 25 25'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M3.65234 11.8273C3.65234 9.99982 5.14434 8.50781 6.97181 8.50781H17.1068C18.9343 8.50781 20.4263 9.99982 20.4263 11.8273V13.0986H18.6429C18.1485 13.0986 17.6983 13.2928 17.3716 13.6283C17.0009 13.9902 16.789 14.5111 16.842 15.0673C16.9214 16.0208 17.7954 16.7182 18.7489 16.7182H20.4263V17.7688C20.4263 19.5963 18.9343 21.0883 17.1068 21.0883H12.2688'
            stroke={props.stroke ?? 'white'}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M3.65234 12.6188V8.58431C3.65234 7.53373 4.29681 6.59789 5.27676 6.2271L12.2865 3.57858C13.3812 3.16365 14.5554 3.97588 14.5554 5.15006V8.50483'
            stroke={props.stroke ?? 'white'}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M21.3602 13.9981V15.8168C21.3602 16.3024 20.9718 16.6996 20.4774 16.7173H18.747C17.7936 16.7173 16.9195 16.0198 16.8401 15.0664C16.7871 14.5102 16.999 13.9893 17.3698 13.6273C17.6964 13.2919 18.1467 13.0977 18.6411 13.0977H20.4774C20.9718 13.1153 21.3602 13.5126 21.3602 13.9981Z'
            stroke={props.stroke ?? 'white'}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M9.65234 12.4688L13.6523 12.4688'
            stroke={props.stroke ?? 'white'}
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M4.09375 16.2305H8.8081'
            stroke={props.stroke ?? 'white'}
            stroke-width='1.5'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M5.17081 15.1523L4.09375 16.2294L5.17081 17.3064'
            stroke={props.stroke ?? 'white'}
            stroke-width='1.5'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M9.83154 20.8906H5.11719'
            stroke={props.stroke ?? 'white'}
            stroke-width='1.5'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
        <path
            d='M8.75586 21.9666L9.83292 20.8896L8.75586 19.8125'
            stroke={props.stroke ?? 'white'}
            stroke-width='1.5'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
        />
    </svg>
);
