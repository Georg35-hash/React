import { TextField, Button, Paper } from "@mui/material"
import { connect } from 'react-redux';
import { addTask } from '../redux/actions';
import { useState } from 'react';

function AddTask({ addTask, setIsAdding, status }) {
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask) {
      const task = {
        id: Date.now(),
        text: newTask,
        status: status
      }
      addTask(task)
    }
    setNewTask('')
    setIsAdding(false)
  }

  const handleCancel = () => {
    setNewTask('')
    setIsAdding(false)
  }

  return (
    <Paper elevation={2}>
      <TextField
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <Button onClick={handleAddTask}>Add</Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </Paper>
  )

}

const mapDispatchToProps = {
  addTask
}
export default connect(null, mapDispatchToProps)(AddTask)