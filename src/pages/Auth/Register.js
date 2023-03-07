import { Col, Row, Container, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSanctum } from "react-sanctum";
import RegisterForm from "../../components/User/RegisterForm";
import ErrorList from "../../components/_Shared/ErrorList";
import useApiService from "../../hooks/useApiService";
import useResult from "../../hooks/useResult";

export default function Register() {
  const { setUser } = useSanctum();
  const { errors, getResult, isPending } = useResult();
  const {
    user: { signUp },
  } = useApiService();

  const registerUser = (_payload) =>
    getResult(signUp(_payload), (data) => setUser(data.user));

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              {isPending && <Spinner />}
              <ErrorList response={errors} />
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-capitalize">
                    Kaydol
                  </h2>
                  <div className="mb-3">
                    <RegisterForm onFormSubmit={registerUser} />
                    {
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Hesabınız var mı?
                          <Link to="/auth/login"> Giriş yap</Link>
                        </p>
                      </div>
                    }
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
