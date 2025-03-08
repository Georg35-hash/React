import { useState } from "react";
import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { connect } from "react-redux";
import { moveTask, updateTask } from "../redux/actions";

function Task({ task, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id)
    e.target.style.opacity = "0.5"
  }

  const handleDragEnd = (e) => e.target.style.opacity = "1"

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTask(task.id, newText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewText(task.text);
  };

  return (
    <Card
      draggable={!isEditing}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <CardContent>
        {isEditing ? (
          <>
            <TextField
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </>
        ) : (
          <>
            <Typography variant='h5'>{task.text}</Typography>
            <Button onClick={handleUpdate} variant="contained" color="primary">
              Edit
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}

const mapDispatchToProps = {
  moveTask,
  updateTask,
};

export default connect(null, mapDispatchToProps)(Task);
