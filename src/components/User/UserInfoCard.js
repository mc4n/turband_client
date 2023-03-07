import { Button, Form, Card, Row, Col, Badge } from "react-bootstrap";
import { BiLogOut as LogoutIcon } from "react-icons/bi";

export default function UserInfoCard({ user, logout }) {
  return (
    <>
      <Row>
        <Col>
          <Button variant="secondary" onClick={logout}>
            <LogoutIcon /> Çıkış yap
          </Button>
        </Col>
      </Row>

      <Card className="mt-2">
        <Card.Body>
          <Form.Group>
            <Form.Text>Kullanıcı adı</Form.Text>
            <Card.Subtitle>
              {user.username}{" "}
              {user.is_admin && <Badge className="bg-dark">Admin</Badge>}
            </Card.Subtitle>
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Text>Üyelik tarihi</Form.Text>
            <Card.Subtitle>{user.created_at}</Card.Subtitle>
          </Form.Group>
        </Card.Body>
      </Card>
    </>
  );
}
