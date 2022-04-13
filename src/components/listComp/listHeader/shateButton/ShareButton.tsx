import React, {useState, useEffect} from 'react'
import { MainContainer,HeaderContainer,UrlContainer, Text, Input, UrlTextBox, CopiedText, CopiedBox } from './styles'
import { AiOutlineClose } from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { setShareButtonToggle } from '../../../../features/movie/movieSlice';
import { ListProps } from '../../../../utils/types';
import axios from 'axios';
import { TiTick } from 'react-icons/ti';
import { blue } from '@mui/material/colors';

const ShareButton = () => {
    const dispatch = useAppDispatch()
    const shareButtonToggle = useAppSelector(state => state.movie.shareButtonToggle)
    
    const [copiedDisplay, setCopiedDisplay] = useState<boolean>(false)
    const [data, setData] = useState({} as ListProps)
    const [loading, setLoading] = useState<boolean>(true)


    const getList = () => {
        setLoading(true)
        axios.get("https://api.themoviedb.org/3/list/8168486?api_key=31af07621087a710376eeeff33ef9885&language=en-US")
            .then(res => {
                setLoading(false)
                setData(res.data)

            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getList()
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        const event = e.target as HTMLInputElement
        navigator.clipboard.writeText(event.value)
        setCopiedDisplay(true)
    }

    useEffect(() => {
        const clear = setTimeout(() => {
            setCopiedDisplay(false)
        }, 3000)

        return () => clearTimeout(clear)
    }, [copiedDisplay])

    return (
    <>
    {loading ? (
        <p>loading...</p>
    ) : (
        <MainContainer display={shareButtonToggle}>
        <HeaderContainer>
            <Text>{data.name}</Text>
            <AiOutlineClose cursor="pointer" onClick={() => dispatch(setShareButtonToggle("false"))}/>
        </HeaderContainer>
        <UrlContainer>
            <UrlTextBox>
                <Text>URL</Text>
                <CopiedBox copiedDisplay={copiedDisplay}>
                    <CopiedText>Copied </CopiedText>
                    <TiTick color={blue[400]} size={20}/>
                </CopiedBox>
            </UrlTextBox>
            <Input 
                onClick={(e) => handleClick(e)}
                value={`https://www.themoviedb.org/list/${data.id}`} 
                type="text" 
                readOnly
             />
        </UrlContainer>
    </MainContainer>
    )}
    </>
  )
}

export default ShareButton