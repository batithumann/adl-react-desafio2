import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Input = ({ state, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa un texto"
          value={state.name}
          onChange={handleChange}
          name="name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresa una contraseña"
          value={state.password}
          onChange={handleChange}
          name="password"
        />
      </Form.Group>
      {state.password === "252525" ? (
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      ) : (
        ""
      )}
    </Form>
  );
};

export default Input;
