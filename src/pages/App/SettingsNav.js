import { useState } from "react";
import {
  ListGroup,
  Button,
  Col,
  Modal,
  Nav,
  Row,
  Tab,
  Container,
  Spinner,
} from "react-bootstrap";
import { useSanctum } from "react-sanctum";
import { GoSettings as SettingsIcon } from "react-icons/go";
import { ImUser as AccountIcon } from "react-icons/im";
import { MdOutlineSettingsApplications as AppSettingIcon } from "react-icons/md";
import Account from "../Auth/Account";

export default function SettingsNav() {
  const [showModal, setShowModal] = useState();
  const { user, signOut } = useSanctum();
  const [loggingOut, setLoggingOut] = useState(false);

  return (
    <>
      <Nav.Item
        as={Button}
        size="sm"
        variant="outline-light"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <SettingsIcon />
      </Nav.Item>

      <Modal
        size="md"
        show={showModal}
        centered
        onHide={setShowModal}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Ayarlar</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          {loggingOut ? (
            <Container className="text-center">
              <Spinner />
            </Container>
          ) : (
            <Tab.Container
              defaultActiveKey={user?.id ? "eventAccount" : "eventApp"}
            >
              <Row>
                <Col style={{ maxWidth: 75 }}>
                  <ListGroup role={"button"}>
                    <ListGroup.Item
                      variant="secondary"
                      action
                      eventKey="eventApp"
                    >
                      <AppSettingIcon />
                    </ListGroup.Item>

                    <ListGroup.Item
                      variant="secondary"
                      disabled={!user?.id}
                      action
                      eventKey="eventAccount"
                    >
                      <AccountIcon />
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col className="col-xs-10">
                  <Tab.Content>
                    <Tab.Pane eventKey="eventApp">
                      <Container>..</Container>
                    </Tab.Pane>
                    <Tab.Pane eventKey="eventAccount">
                      <Account
                        user={user}
                        logout={async () => {
                          setLoggingOut(true);
                          await signOut();
                          setShowModal(false);
                          setLoggingOut(false);
                        }}
                        passwdChanged={() => setShowModal(false)}
                      />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
