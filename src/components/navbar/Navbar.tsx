import React, { useCallback, useEffect, useState } from 'react'
import SearchBar from './searchbar/SearchBar'
import { TopMenuContainer, SearchIconOpen, ImageBox, ImageContainer, InSearchBarBox, MainBox, MainContainer, MainContent, MenuContainer, MenuIconBox, MenuItemBox, MenuItemText, OutSearchBarBox, TopMenuBox } from './styles'
import Logo from "../../assets/logos.svg"
import { menuList } from '../../utils/menuItem'
import { BiMenuAltLeft } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useAppSelector } from '../../app/hooks';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux'
import { setSearchToggle, setTopMenuToggle } from '../../features/movie/movieSlice'
import TopMenu from './topMenu/TopMenu'
import { useNavigate } from 'react-router-dom'
import CustomLink from '../CustomLink'

const Navbar = () => {

    const navigate = useNavigate()

    const searchToggle = useAppSelector(state => state.movie.searchToggle)
    const topMenuTogle = useAppSelector(state => state.movie.topMenuToggle)
    const dispatch = useDispatch()
    const [height, setHeight] = useState<number>(0)
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth)

    const handleWindowResize = useCallback(event => {
        setWindowSize(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize)

        return () => {
            window.addEventListener("resize", handleWindowResize)

        }
    }, [handleWindowResize])

    useEffect(() => {
        if (windowSize > 1100) {
            dispatch(setTopMenuToggle(false))
        }
    })


    return (
        <MainContainer >
            <TopMenuContainer>
                <TopMenuBox height={height} topMenuToggle={topMenuTogle} >
                    <TopMenu setHeight={setHeight} />
                </TopMenuBox>
                <MainBox>
                    <MainContent searchToggle={searchToggle}>
                        <ImageContainer>
                            {topMenuTogle ? (
                                <MenuIconBox onClick={() => dispatch(setTopMenuToggle(false))}>
                                    <AiOutlineClose
                                        color='white'
                                        size={50}
                                    />
                                </MenuIconBox>
                            ) : (
                                <MenuIconBox onClick={() => dispatch(setTopMenuToggle(true))}>
                                    <BiMenuAltLeft

                                        color='white'
                                        size={50}
                                    />
                                </MenuIconBox>
                            )}
                            <ImageBox>
                                <img onClick={() => navigate("/")} src={Logo} />
                            </ImageBox>
                        </ImageContainer>
                        <MenuContainer>
                            {menuList.map(item => (
                                <MenuItemBox key={item.id}>
                                    <CustomLink to={item.path}>
                                        {item.name}
                                    </CustomLink>
                                </MenuItemBox>
                            ))}
                        </MenuContainer>
                        <InSearchBarBox>
                            <SearchBar />
                        </InSearchBarBox>
                        <SearchIconOpen
                            onClick={() => dispatch(setSearchToggle(true))}
                            searchToggle={searchToggle}
                        >
                            <AiOutlineSearch size={35} color="white" />
                        </SearchIconOpen>
                    </MainContent>
                    <OutSearchBarBox searchToggle={searchToggle}>
                        <SearchBar />
                    </OutSearchBarBox>
                </MainBox>
            </TopMenuContainer>
        </MainContainer>
    )
}

export default Navbar