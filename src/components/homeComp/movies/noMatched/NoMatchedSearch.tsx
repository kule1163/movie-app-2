import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { MainContainer, TextBox, Text } from './styles'
import { blue } from '@mui/material/colors'

const NoMatchedSearch = () => {
    
    const searchValue = useAppSelector(state => state.movie.searchValue)
  
    return (
    <MainContainer>
        <TextBox>
            <Text>No Matched By "{searchValue}" <b style={{cursor: "pointer", color: `${blue[400]}`}}>Go Home</b></Text>
        </TextBox>
    </MainContainer>
  )
}

export default NoMatchedSearch