import * as React from 'react'

import './Widget.scss'

interface Props {
    type: string
    // title: string
    // isMoney: boolean
}

const amount = 90;
const diff = 15;

export function Widget({ type }: Props) {

    let data;
    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users"
            }
            break;

        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "See all users"
            }
            break;
        case "earnings":
            data = {
                title: "USERS",
                isMoney: true,
                link: "View net earnings"
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details"
            }
            break;
        default:
            break;
    }


    return (
        <div className='widget'>
            <div className="left">
                <span className='title'>{data?.title}</span>
                <span className='counter'>{data?.isMoney && "$"} {amount}</span>
                <span className='link'>{data?.link}</span>
            </div>
            <div className="right">
                <div className="percentage negative">{diff}%</div>
                <div className='icon'>{diff}</div>
            </div>
        </div>
    )
}