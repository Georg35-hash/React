import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Box from '@mui/material/Box';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <>
      <AppBar position="static" style={{ padding: '20px' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Material UI App
        </Typography>

      </AppBar>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div>
          <DialogTitle style={{ padding: '0px' }}>Welcome to our app!</DialogTitle>

          <Button variant="contained" onClick={handleOpen}> Open dialogue window </Button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Use Material UI?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <div style={{display:'flex', justifyContent:'flex-end'}}>
            <Button onClick={handleClose}>Reject</Button>
            <Button onClick={handleClose}>Accept</Button>
          </div>

        </Box>
      </Modal>
    </>
  );
}

export default App;
