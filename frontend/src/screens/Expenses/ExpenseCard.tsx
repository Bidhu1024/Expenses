import React, { type FC } from 'react'

import { Box } from '@mui/material'
interface Card{
    element:any
}
const ExpenseCard:FC<Card> = ({dataz}) => {
  return (
  <Box sx={{height:"10rem", border:"1px solid white", width:"15rem"}}>
    {dataz._id}
  </Box>
  )
}

export default ExpenseCard
