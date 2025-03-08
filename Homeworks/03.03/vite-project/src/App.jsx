import { Button, Form, Input, Card, Typography } from "antd";
import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState({ name: "", description: "" });
  const [submitedData, setSubmitedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const handleSubmit = () => {
    if (inputValue.name.trim() || inputValue.description.trim()) {
      setSubmitedData(inputValue);
    } else {
      setSubmitedData(null);
    }
  };
  const { Title } = Typography;
  return (
    <>
      <Form>
        <Title>Форма с использованием Ant Design</Title>
        <Input
          name="name"
          value={inputValue.name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
        />
        <Input
          name="description"
          value={inputValue.description}
          type="text"
          placeholder="Describ"
          onChange={handleChange}
        />
        <Button value={submitedData} onClick={handleSubmit}>
          Send
        </Button>
      </Form>
      {!submitedData ? (
        <p>U have no data to submit</p>
      ) : (
        <Card>
          <Title>Your data:</Title>
          <p>{submitedData.name}</p>
          <p>{submitedData.description}</p>
        </Card>
      )}
    </>
  );
}

export default App;
