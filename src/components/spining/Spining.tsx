import React from 'react'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import {blue} from "@mui/material/colors"

const Spining = () => {
    const override = css`
    display: block;
    margin: 5rem auto;
  `;
  
    return (
        <ClipLoader color={blue[400]}  css={override} size={150} />

  )
}

export default Spining