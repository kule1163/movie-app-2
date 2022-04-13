import React from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { MainContainer, TextBox, Text } from './styles'
import { blue } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'

const NoMatchedSearch = () => {
    
    const searchValue = useAppSelector(state => state.movie.searchValue)

    const navigate = useNavigate()
  
    return (
    <MainContainer>
        <TextBox>
            <Text>No Matched By "{searchValue}" 
            <b 
                onClick={() => navigate("/")} 
                style={{cursor: "pointer", color: `${blue[400]}`}}
            >
                Go Home
            </b>
            </Text>
        </TextBox>
    </MainContainer>
  )
}

export default NoMatchedSearch