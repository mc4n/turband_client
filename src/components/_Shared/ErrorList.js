import { Alert } from "react-bootstrap";

export default function ErrorList({ response }) {
  if (!response) return null;

  const errs = response.errors && Object.entries(response.errors);

  return (
    response && (
      <Alert variant="danger">
        {errs?.length > 1 ? (
          <ul>
            {errs.map((i, index) => (
              <li key={index}>{i[1]}</li>
            ))}
          </ul>
        ) : (
          response.message
        )}
      </Alert>
    )
  );
}
