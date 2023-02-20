import * as React from 'react';
import { Sidebar } from '../../components/sidebar/Sidebar';
import "./Home.scss"

interface Props {
    name?: string
}

export function Home ({name}: Props) {
  return (
    <div className='home'>
      {/* <p>{name}</p> */}
      <Sidebar/>
      <div className="home-container">Container</div>
    </div>
  );
}
