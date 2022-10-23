import "./App.css";
import Input from "./components/Input";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    name: "",
    password: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`nombre: ${state.name},\ncontraseña: ${state.password}`);
  };

  return (
    <Container>
      <h1>Desafío Estado de los componentes y eventos</h1>
      <Input
        state={state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default App;
