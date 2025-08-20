import React, { type FC } from 'react'
import { FcBullish } from "react-icons/fc";

import { Box } from '@mui/material'
interface Card{
    element:any
}
const ExpenseCard:FC<Card> = ({dataz}) => {
  return (
  <Box sx={{height:"10rem", border:"1px solid white", width:"15rem",bgcolor:"#2E3944",borderRadius:"10px"}}>
    <FcBullish size={40}/>
    {dataz._id}
  </Box>
  )
}

export default ExpenseCard
