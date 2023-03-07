import { Button, Form } from "react-bootstrap";
import { BiLogIn as LoginIcon } from "react-icons/bi";

export default function LoginForm({ onFormSubmit }) {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();

        onFormSubmit(
          e.target.formBasicUsernameOrEmail.value,
          e.target.formBasicPassword.value
        );
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicUsernameOrEmail">
        <Form.Label className="text-center">Kullanıcı adı</Form.Label>
        <Form.Control placeholder="Kullanıcı adı" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Şifre</Form.Label>
        <Form.Control type="password" placeholder="Şifre" />
      </Form.Group>
      <div className="d-grid">
        <Button variant="secondary" type="submit">
          <LoginIcon /> Giriş yap
        </Button>
      </div>
    </Form>
  );
}
