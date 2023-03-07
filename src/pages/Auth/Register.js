import { useState } from "react";
import { Col, Row, Container, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSanctum } from "react-sanctum";
import RegisterForm from "../../components/User/RegisterForm";
import ErrorList from "../../components/_Shared/ErrorList";
import { API_URL } from "../../constants";
import { postData } from "../../utils/axios";

export default function Register() {
  const { setUser } = useSanctum();
  const [errors, setErrors] = useState(null);

  const onFormSubmit = async (username, password, confirm_password) => {
    setErrors(undefined);

    postData(API_URL + "/user", { username, password, confirm_password })
      .then((response) => {
        response.status === 200 && setUser(response.data.user);
        setErrors(null);
      })
      .catch(({ response }) => {
        response.status === 422 && setErrors(response.data);
      });
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              {errors === undefined && <Spinner />}
              <ErrorList response={errors} />
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-capitalize">
                    Kaydol
                  </h2>
                  <div className="mb-3">
                    <RegisterForm onFormSubmit={onFormSubmit} />
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
