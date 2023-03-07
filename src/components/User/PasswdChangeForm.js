import { Button, Form, Card } from "react-bootstrap";

export default function PasswdChangeForm({ onFormSubmit }) {
  return (
    <Card>
      <Card.Header>Şifre değişikliği</Card.Header>
      <Card.Body>
        <Form
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              return false;
            }
          }}
          onSubmit={(e) => {
            e.preventDefault();
            const [pwd, pwd_conf] = [
              e.target.ctPassword.value,
              e.target.ctConfirmPassword.value,
            ];
            const form_data = new FormData();
            form_data.append("password", pwd);
            form_data.append("confirm_password", pwd_conf);

            onFormSubmit && onFormSubmit(form_data);
          }}
        >
          <Form.Group className="mb-1" controlId="ctPassword">
            <Form.Text>Şifre</Form.Text>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-1" controlId="ctConfirmPassword">
            <Form.Text>Şifre doğrula</Form.Text>
            <Form.Control type="password" />
          </Form.Group>

          <Button
            type="submit"
            className="mt-2"
            variant="outline-secondary"
            size="sm"
          >
            Değiştir
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
