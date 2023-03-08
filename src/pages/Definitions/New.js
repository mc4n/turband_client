import { Button, Container, Form } from "react-bootstrap";
import useApiService from "../../hooks/useApiService";
import useResult from "../../hooks/useResult";

export default function New() {
  const { definition } = useApiService();
  const { getResult } = useResult();

  return (
    <Container>
      <p>Tanım oluştur</p>

      <Form
        onSubmit={(e) => {
          e.preventDefault();

          getResult(
            definition.add({
              word: e.target.word.value,
              definition: e.target.word.value,
              example: e.target.word.value,
            })
          );
        }}
      >
        <Form.Control name="word" placeholder="Kelime" />
        <Form.Control name="definition" placeholder="Tanım" />
        <Form.Control name="example" placeholder="Örnek" />
        <Button type="submit">OLUŞTUR</Button>
      </Form>
    </Container>
  );
}
