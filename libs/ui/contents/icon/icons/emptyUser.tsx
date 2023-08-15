import React from 'react';
export const EmptyUser = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        width={props.width ?? '33'}
        height={props.height ?? '32'}
        viewBox='0 0 33 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <g clip-path='url(#clip0_1_1607)'>
            <circle cx='16.75' cy='16' r='16' fill='#1F1750' />
            <path
                d='M9.75 23.1115C9.75 20.6984 11.4473 18.643 13.754 18.2627L13.9618 18.2284C15.8089 17.9239 17.6911 17.9239 19.5382 18.2284L19.746 18.2627C22.0527 18.643 23.75 20.6984 23.75 23.1115C23.75 24.1545 22.9315 25 21.9219 25H11.5781C10.5685 25 9.75 24.1545 9.75 23.1115Z'
                stroke={props.stroke ?? '#C2BCE4'}
                stroke-width='1.5'
            />
            <path
                d='M20.8334 10.9375C20.8334 13.1121 19.0052 14.875 16.75 14.875C14.4949 14.875 12.6667 13.1121 12.6667 10.9375C12.6667 8.76288 14.4949 7 16.75 7C19.0052 7 20.8334 8.76288 20.8334 10.9375Z'
                stroke={props.stroke ?? '#C2BCE4'}
                stroke-width='1.5'
            />
        </g>
        <defs>
            <clipPath id='clip0_1_1607'>
                <rect
                    width='32'
                    height='32'
                    fill='white'
                    transform='translate(0.75)'
                />
            </clipPath>
        </defs>
    </svg>
);
