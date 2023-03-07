import { Col, Row, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSanctum } from "react-sanctum";
import LoginForm from "../../components/User/LoginForm";

export default function Login() {
  const { signIn } = useSanctum();

  const onFormSubmit = (username, pwd) => {
    signIn(username, pwd)
      .then(({ user }) => null)
      .catch(({ response }) => null);
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-secondary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Turband</h2>
                  <p className=" mb-5">Kullanıcı girişi</p>
                  <div className="mb-3">
                    <LoginForm responseInfo={{}} onFormSubmit={onFormSubmit} />

                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Hesabın yok mu?
                        <Link to="/auth/register">Kaydol</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
