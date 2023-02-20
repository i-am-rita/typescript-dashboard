import React, { FC } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/home/Home';

const App: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            {/* <Route path='login' element={<Login />} /> */}
            {/* <Route path='users'>
            <Route index element={<List />} />
            <Route path=':userId' element={<Single/>}/>
            <Route path='new' element={<New/>}
            </Route> */}
            {/* <Route path='products'>
            <Route index element={<List />} />
            <Route path=':productId' element={<Single/>}/>
            <Route path='new' element={<New/>}
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Home name="Rita" /> */}
    </div>
  );
}

export default App;
