import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { setTopMenuToggle } from '../../../features/movie/movieSlice'
import { menuList } from '../../../utils/menuItem'
import { MainContainer, MenuContainer, MenuItemText, MenuItemBox } from './styles'
import CustomLink from "../../CustomLink"

interface TopMenuProps {
    setHeight: React.Dispatch<React.SetStateAction<number>>
}

const TopMenu = ({setHeight}:TopMenuProps) => {
    
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(ref.current?.offsetHeight) {
            setHeight(ref.current?.offsetHeight)
        }
    }, [])    
  
    return (
    <MainContainer ref={ref}>
        <MenuContainer>
            {menuList.map(item => (
                
                    <MenuItemBox 
                    onClick={() => {
                        /* navigate(item.path) */
                        dispatch(setTopMenuToggle(false))
                    }} 
                    key={item.id}
                >
                    <CustomLink to={item.path}>{item.name}</CustomLink>
                </MenuItemBox>
           
            ))}
        </MenuContainer>
    </MainContainer>
  )
}

export default TopMenu