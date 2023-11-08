import React from 'react'
import Form from '../Form/Form'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import ChangeTodoForm from '../ChangeTodoForm/ChangeTodoForm'

export default function TodoInfoBox() {
  const selectedTodo = useSelector((state) => state.selectedTodo)
  console.log('selectedTodo', selectedTodo)
  return (
    <Box>
      {selectedTodo && <ChangeTodoForm selectedTodo={selectedTodo}/>}
    </Box>
  )
}
