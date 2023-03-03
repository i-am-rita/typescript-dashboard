import * as React from 'react';
import { Navbar } from '../../components/navbar/Navbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { CellTable } from '../../components/table/CellTable';
import { Widget } from '../../components/widget/Widget';
import "./Home.scss"

interface Props {
    name?: string
    // title: string
    // isMoney: boolean
    // link: string
}

export function Home({ name }: Props) {
    return (
        <div className='home'>
            {/* <p>{name}</p> */}
            <Sidebar />
            <div className="home-container">
                <Navbar />
                <div className='widget-container'>
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earnings" />
                    <Widget type="balance" />
                </div>

                <div className="list-container">
                    <div className="list-title">
                        Latest transactions
                    </div>
                    <CellTable id={0} product={''} img={''} customer={''} date={''} amount={0} method={''} status={false}/>
                    {/* <cellTable id={0} product={''} img={''} customer={''} date={''} amount={0} method={''} status={false} /> */}
                </div>
                Container
            </div>
        </div>
    );
}
