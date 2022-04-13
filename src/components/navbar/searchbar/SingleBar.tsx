import React from 'react'
import {Search, SearchIconBox} from "./styles"
import { AiOutlineSearch } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setSearchValue, setCount } from '../../../features/movie/movieSlice';
import { useNavigate } from 'react-router-dom';

const SingleBar = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const searchValue = useAppSelector(state => state.movie.searchValue)
  const count = useAppSelector(state => state.movie.count)

  return (
    <>
        <Search 
          value={searchValue} 
          onChange={(e) => {
            dispatch(setSearchValue(e.target.value))
            dispatch(setCount(count + 1))
            navigate("/search")
          }} 
          placeholder="I'm looking for..." 
          type="text" 
        />
        <SearchIconBox >
            <AiOutlineSearch size={25} />
        </SearchIconBox>
    </>
  )
}

export default SingleBar