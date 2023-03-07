import { Button, Form } from "react-bootstrap";

export default function RegisterForm({ onFormSubmit }) {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();

        onFormSubmit({
          username: e.target.ctUsername.value,
          password: e.target.ctPassword.value,
          confirm_password: e.target.ctConfirmPassword.value,
        });
      }}
    >
      <Form.Group className="mb-3" controlId="ctUsername">
        <Form.Label className="text-center">Kullanıcı adı</Form.Label>
        <Form.Control placeholder="Kullanıcı adı" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="ctPassword">
        <Form.Label>Şifre</Form.Label>
        <Form.Control type="password" placeholder="Şifre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="ctConfirmPassword">
        <Form.Label>Şifre doğrula</Form.Label>
        <Form.Control type="password" placeholder="Şifre doğrula" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <div className="d-grid">
        <Button variant="secondary" type="submit">
          Oluştur
        </Button>
      </div>
    </Form>
  );
}
