import React from 'react';
import Main  from './pages/MainPage';
import SearchPage  from './pages/SearchPage'
import Nav from './components/Nav';
import { Routes, Route, Outlet} from "react-router-dom"

import './App.css';

const Layout = () =>{
  return(
    <div>
      <Nav/>
      <Outlet/>
    </div>
    

  )
}


function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path = "/" element ={<Layout/>}/>
          <Route index element = {<Main/>}/>
          <Route path='search' element = {<SearchPage/>}/>
        </Routes>
        <Main />
    </div>
  );
}

export default App;
