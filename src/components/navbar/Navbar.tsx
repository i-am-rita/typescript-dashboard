import * as React from 'react';

import "./Navbar.scss"
export interface Props {

}

export function Navbar(props: Props) {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                </div>

                <div className="items">
                    <div className="item">
                        En
                    </div>
                    <div className="item">
                        En
                    </div>
                    <div className="item">
                        En
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        En
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        En
                    </div>
                    <div className="item">
                        En
                    </div>
                    <div className="item">
                        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                            alt='userimage'
                            className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    )
}