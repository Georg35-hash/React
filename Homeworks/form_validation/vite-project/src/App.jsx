import { useState } from "react";

function App() {
  const [data, setData] = useState({ name: "", email: "" });
  const [submitedData, setSubmitedData] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name.trim() || !data.email.trim()) {
      setError("Все поля должны быть заполнены!");
      return;
    }
    if (!data.email.includes("@")) {
      setError("Email должен содержать @!");
      return;
    }

    setSubmitedData([...submitedData, data]);
    setData({ name: "", email: "" });
    setError("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={data.name}
          name="name"
          type="text"
          placeholder="Введите имя"
          onChange={handleChange}
        />
        <input
          value={data.email}
          name="email"
          type="email"
          placeholder="Введите email"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {submitedData.length === 0 ? (
        <p>Нет данных</p>
      ) : (
        <ul>
          {submitedData.map((item, index) => (
            <li key={index}>
              {item.name} - {item.email}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
