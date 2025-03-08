import { Button as AntdButton, Modal } from 'antd';
import { useState } from 'react';
import { List, Input, InputGroup, IconButton, Button } from 'rsuite';
import {Plus} from '@rsuite/icons' 
import "rsuite/dist/rsuite.min.css"
function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    setList((prevlist) => [...prevlist, newItem]);
    setNewItem('');
  };


  const showModal = () => {
    setIsOpen(true);
  };

  const handleCancle = () => {
    setIsOpen(false);
  };
  const handleOk = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <AntdButton type='primary' onClick={showModal}>Открыть модальное окно</AntdButton>
        <Modal title="Basic Modal" open={isOpen} onCancel={handleCancle} onOk={handleOk}>
          <p>Текст для модального окна</p>
        </Modal>
      </div>
      <div>
        <InputGroup style={{margin:'20px'}}>
          <Input value={newItem}
          onChange={setNewItem}
          placeholder='Enter new element'
          />
          <InputGroup.Button>
          <IconButton icon={<Plus/>} appearance='primary' onClick={handleAddItem}/>
          </InputGroup.Button>
        </InputGroup>
        <List style={{margin:'20px'}}>
          {
            list.map(item => (
              <List.Item key={item}>{item}</List.Item>
            ))
          }
        </List>
      </div>
    </>
  );
}

export default App;
