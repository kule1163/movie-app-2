import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {MainContainer,SectionContainer} from "./styles"
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import Home from './pages/home/Home';
import List from './pages/list/List';
import Search from './pages/search/Search';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { setTopMenuToggle } from './features/movie/movieSlice';
import ShareButton from './components/listComp/listHeader/shateButton/ShareButton';

function App() {

  const location = useLocation()
  const [pathname, setPathname] = useState([] as string[])
  const navigate = useNavigate()
  
  const searchValue = useAppSelector(state => state.movie.searchValue)
  const afterDisplay = useAppSelector(state => state.movie.shareButtonToggle)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setPathname(prev => [...prev, location.pathname])
    dispatch(setTopMenuToggle(false))
  }, [location.pathname])

  useEffect(() => {
    if(location.pathname === "/search" && searchValue.length === 0) {
      navigate(pathname[pathname.length - 2])  
    }
  }, [searchValue])

  return (
    <MainContainer afterDisplay={afterDisplay}>
      <SectionContainer>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/list' element={<List />}/>
          <Route path='/search' element={<Search />}/>
        </Routes>
      </SectionContainer>
      <ShareButton />
    </MainContainer>
  );
}

export default App;
