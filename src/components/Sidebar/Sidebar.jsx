import { Box, Drawer, List, ListItem } from '@mui/material';
import React, {useState} from 'react'
import Todo from '../Todo/Todo';
import { TextField } from '@mui/material';

export default function Sidebar({ sidebarOpen, setSidebarOpen, todo }) {
  const [value, setValue] = useState(todo.title)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSidebarOpen(false);
  };

  function handleTodoChange(e) {
    setValue(e.target.value)
  }

  const list = () => (
    <Box onClose={toggleDrawer()} role="presentation">
      <TextField value={value} onChange={handleTodoChange}/>
      {todo.title}

    </Box>
  );


  return (
    <div>
      <Drawer
          anchor="right"
          open={sidebarOpen}
          onClose={toggleDrawer()}
          sx={{width: 500}}
          PaperProps={{
            sx: { width: '30%' }
          }}
        >
          {list()}
        </Drawer>
    </div>
  )
}
