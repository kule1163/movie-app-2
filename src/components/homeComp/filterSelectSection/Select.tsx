import React, {useState, useEffect} from 'react'
import { Genre } from '../../../utils/types';
import axios from "axios"
import Select, {SingleValue}  from 'react-select'
import { blue } from '@mui/material/colors';
import { usNavyBlue } from '../../../styles';
import { useAppDispatch } from '../../../app/hooks';
import { setGenre } from '../../../features/movie/movieSlice';


export const customStyles = {
  option: (provided:any, state:any) => ({
    ...provided,
    boxSize: "border-box",
    color: state.isSelected ? `${blue[400]}` : 'white',
    padding: 5,
    background: `${usNavyBlue}`,
    "&:hover": {
      background: "tranparent",
      color: `${blue[400]}`
    }
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
    background: `${usNavyBlue}`,
    display: "flex",
    color: `${blue[400]}`,

  }),
  singleValue: (provided:any, state:any) => (
    {
      ...provided,
      opacity: state.isDisabled ? 0.5 : 1,
      transition: 'opacity 300ms',
      color: `white`,
      "&:hover": {
        color: `${blue[400]}`
      }
    }
  ),
  menuList: (base:any) => ({
    ...base,
    // kill the white space on first and last option
    padding: 0
  }),
  placeholder: (base:any) => ({
    ...base,
    // kill the white space on first and last option
    color: "white"
  })
}

export interface OptionsProps {
  value: number | string | undefined,
  label: string
}

interface SelectProps {
  type: string;
  typeValue: string;
}

const SelectComp = ({typeValue}: SelectProps) => {
  const [genres, setGenres] = useState<Genre[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const dispatch = useAppDispatch()

  const options:OptionsProps[] = [
    {value: "all", label: "All genres"}
  ]

  genres.length > 0 && genres.forEach(item => {
    options.push({value: item.id, label: item.name})
    
  })

  const handleChange = (e: SingleValue<OptionsProps>) => {
    if(e) {
      dispatch(setGenre(e.value))
    }
  }
  
  const getMovieGenres = () => {
    setLoading(true)
    axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=31af07621087a710376eeeff33ef9885&language=en-US")
      .then(res => {
        setLoading(false)
        setGenres(res.data.genres)
      })
      .catch(err => {
        console.log(err);
      })
}

useEffect(() => {
  if(typeValue === "genres") {
    getMovieGenres()
  }
}, [])
  
  
  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Select onChange={(e) => handleChange(e)} defaultValue={options[0]} styles={customStyles} options={options} />
      )}
    </>
  )
}

export default SelectComp