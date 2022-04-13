import { blue } from '@mui/material/colors'
import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { setFilterButton } from '../../../features/movie/movieSlice'
import { buttonItems } from '../../../utils/buttonItems'
import { Line, MainContainer, SectionContainer, SingleBox, SingleText } from './styles'

const ButtonSection = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [l, setL] = useState<number[]>([])
    const [w, setW] = useState<number[]>([])

    const dispatch = useAppDispatch()

    const revealRefs = useRef<HTMLDivElement[]>([])
    revealRefs.current = []

    const addToRef = (el:HTMLDivElement) => {
        if(el && !revealRefs.current?.includes(el)) {
            revealRefs.current?.push(el)            
        }
    }

    useEffect(() => {
        revealRefs.current?.forEach(el => {
            setL(prev => [...prev, el.offsetLeft])
            setW(prev => [...prev, el.offsetWidth])
        })
    }, [])
    
    return (
   <MainContainer>
       <SectionContainer>
          {buttonItems.map((item, index) => (
              <SingleBox 
                ref={addToRef} 
                onClick={() => {
                    setCurrentIndex(index)
                    dispatch(setFilterButton(item.name.toLowerCase()))
                }} 
              key={item.id}
              >
                  <SingleText style={{color: index === currentIndex ? "white" : `${blue[400]}`}}>{item.name}</SingleText>
              </SingleBox>
              
          ))}
           <Line left={l[currentIndex]} width={w[currentIndex]} currentIndex={currentIndex}>

           </Line>
       </SectionContainer>
   </MainContainer>
  )
}

export default ButtonSection