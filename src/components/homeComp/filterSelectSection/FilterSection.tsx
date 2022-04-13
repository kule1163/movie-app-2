import React from 'react'
import SelectComp, { customStyles } from './Select'
import { FilterButtonBox, MainContainer, SelectContainer } from './styles'
import ButtonSection from '../filterButtonSection/ButtonSection'
import Select, {SingleValue}  from 'react-select'
import {buttonItems} from "../../../utils/buttonItems"
import { useAppDispatch } from '../../../app/hooks'
import { setFilterButton } from '../../../features/movie/movieSlice'

interface OptionProps {
  value: string;
  label: string;
}

const FilterSection = () => {
  
  const options:OptionProps[] = []
  const dispatch = useAppDispatch()

  buttonItems.forEach(item => {
    options.push({label: item.name, value: item.name.toLowerCase()})
  })

  const handleChange = (e: SingleValue<OptionProps>) => {
    if(e) {
      dispatch(setFilterButton(e.value))
    }
  }

  return (
    <MainContainer>
      <SelectContainer>
        <SelectComp  typeValue="genres" type="All genres"/>
        <FilterButtonBox>
          <Select onChange={handleChange} defaultValue={options[0]} styles={customStyles} options={options} />
        </FilterButtonBox>
      </SelectContainer>
      <ButtonSection />
    </MainContainer>
  )
}

export default FilterSection