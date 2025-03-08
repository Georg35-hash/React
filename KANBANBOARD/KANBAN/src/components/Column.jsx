import { Paper, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { connect } from 'react-redux';
import Task from './Task';
import { moveTask } from '../redux/actions';
import { useState } from 'react';
import AddTask from './AddTask';

function Column({ tasks, status, title, moveTask }) {
  const [isAdding, setIsAdding] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const filteredTasks = tasks.filter(task => task.status === status)


  const handleDragOver = (e) => {
    e.preventDefault()
    if (!isDraggingOver) {
      setIsDraggingOver(true)
    }
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDraggingOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault();
    let taskId = e.dataTransfer.getData('taskId')


    if (taskId) {
      taskId = typeof taskId === 'string' ? parseInt(taskId, 10) : taskId
      moveTask(taskId, status)
    }
    setIsDraggingOver(false)
  }

  return (
    <Paper
      elevation={3}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      sx={{
        minWidth: 300,
        backgroundColor: isDraggingOver ? 'rgba(0, 0, 0, 0.04)' : 'white'
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <IconButton onClick={() => setIsAdding(true)}>
        <AddIcon />
      </IconButton>
      {isAdding && <AddTask setIsAdding={setIsAdding} status={status} />}
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} status={task.status} />
      ))}
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks
})

const mapDispatchToProps = {
  moveTask
}

export default connect(mapStateToProps, mapDispatchToProps)(Column)