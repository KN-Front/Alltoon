import React from 'react';
import Main  from './pages/MainPage';
import SearchPage  from './pages/SearchPage'
import Header from './components/Heaer';
import Loading from './components/Loading'
import { Routes, Route, Outlet} from "react-router-dom"
import "./styles/webtoon.css"
import './App.css';

const Layout = () =>{
  return(
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}


function App() {
  return (
    
    <div className='App'>
      <Loading/>
      <Routes>
        <Route path = "/" element ={<Layout/>}>
          <Route index element = {<Main/>}/>
          <Route path='search' element = {<SearchPage/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
