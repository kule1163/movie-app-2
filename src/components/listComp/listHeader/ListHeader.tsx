import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ListProps } from "../../../utils/types"
import { ButtonContainer, ContentContainer, Header, IdText, ListByBox, ListByContainer, MainContainer, SingleButton, SortBox, SortItemsContainer, SortItemText } from './styles'
import { FaPowerOff } from 'react-icons/fa';
import { sortByItems } from '../../../utils/sortByItems';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setShareButtonToggle, setSortBy } from '../../../features/movie/movieSlice';
import { blue } from '@mui/material/colors';

interface ListHeaderProps {
    data: ListProps;
}

const ListHeader = ({ data }: ListHeaderProps) => {

    const [display, setDisplay] = useState<"true" | "false">("false")
    const [currentValue, setCurrentValue] = useState("o")
    const dispatch = useAppDispatch()


    useEffect(() => {
        setDisplay("false")
    }, [window.location.pathname])

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const event = e.target as HTMLDivElement
        if(!event.classList.contains("sort")) {
            setDisplay("false")
        }
    }

  

    return (
        <>
            {data && (
                <MainContainer onMouseMove={(e) => handleMouseEnter(e)}>
                    <ContentContainer>
                        <Header variant='h3'>{data?.name}</Header>
                        <ListByContainer>
                            <FaPowerOff color='white' size={50} />
                            <ListByBox>
                                <Header>A list by</Header>
                                <IdText>{data?.created_by}</IdText>
                            </ListByBox>
                        </ListByContainer>
                    </ContentContainer>
                    <ButtonContainer>
                            <SingleButton onMouseEnter={() => setDisplay("true")} className='sort'>Sort By</SingleButton>
                            <SortItemsContainer onMouseLeave={() => setDisplay("false")} display={display} className='sort'>
                                {sortByItems.map(item => (
                                    <SortItemText 
                                        className='sort' 
                                        key={item.id}
                                        onClick={() => {
                                            dispatch(setSortBy(item.value))
                                            setCurrentValue(item.value)
                                        }}
                                        style={{color: item.value === currentValue ? `${blue[400]}` : "black"}}
                                    >
                                        {item.label}
                                    </SortItemText>
                                ))}
                            </SortItemsContainer>
                        <SingleButton onClick={() => dispatch(setShareButtonToggle("true"))}>Share</SingleButton>
                    </ButtonContainer>
                </MainContainer>
            )}
        </>
    )
}

export default ListHeader