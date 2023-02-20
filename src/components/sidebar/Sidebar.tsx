import * as React from 'react';

import "./Sidebar.scss"

export interface Props {

}

export function Sidebar(props: Props) {
    return (
        <>
            <div className='sidebar'>
                <div className='logo-container'>
                    <span className='logo'>Admin</span>
                </div>
                <hr />
                <div className="sidebar-items">
                    <ul>
                        <p className='title'>Main</p>
                        <li>
                            {/* install mui icons and use the icons */}
                            <span>Dashboard</span>
                        </li>
                        <p className='title'>List</p>
                        <li>
                            <span>Dashboard</span>
                        </li>
                        <p className='title'>Services</p>

                        <li>
                            <span>Dashboard</span>
                        </li>
                        <p className='title'>List</p>

                        <li>
                            <span>Dashboard</span>
                        </li>
                    </ul>
                </div>
                <div className="color-mode">
                    <div className="color-option"></div>
                    <div className="color-option"></div>
                </div>
            </div>
        </>
    )
}