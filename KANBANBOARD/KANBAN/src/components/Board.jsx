import { Box } from "@mui/material";
import Column from './Column';

export default function Board() {
  return (
    <Box sx={{
      display: 'flex',
      padding: 2,
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <Column title="To do" status="toDo"/>
      <Column title="In progress" status="inProgress" />
      <Column title="Done" status="done" />
    </Box>
  );
}