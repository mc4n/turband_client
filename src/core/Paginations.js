import { useEffect, useState } from "react";
import {
  Col,
  Row,
  Pagination,
  Container,
  Button,
  Spinner,
} from "react-bootstrap";
import { MdExpandMore as SeeMoreIcon } from "react-icons/md";

export function ComboPagination({ meta, onPageChanged, children }) {
  const { current_page, last_page, per_page, total } = meta ?? {};

  const Paginator = () =>
    total / per_page <= 1 ? null : (
      <Row className="mt-3 justify-content-center">
        <Col xs={4}>
          <Pagination>
            <Pagination.First
              disabled={current_page === 1}
              onClick={() => onPageChanged(1)}
            />
            <Pagination.Prev
              disabled={current_page === 1}
              onClick={() => onPageChanged(current_page - 1)}
            />

            <select
              style={{ width: "55px" }}
              className="mx-2"
              onChange={(i) => onPageChanged(i.target.value)}
              value={current_page}
            >
              {[...Array(last_page).keys()].map((pgNum) => (
                <option key={pgNum + 1}>{pgNum + 1}</option>
              ))}
            </select>

            <Pagination.Next
              disabled={current_page === last_page}
              onClick={() => onPageChanged(current_page + 1)}
            />
            <Pagination.Last
              disabled={current_page === last_page}
              onClick={() => onPageChanged(last_page)}
            />
          </Pagination>
        </Col>
      </Row>
    );

  return meta ? (
    <Container>
      {children}
      <Paginator />
    </Container>
  ) : (
    <Container className="text-center">
      <Spinner animation="grow" />
    </Container>
  );
}

export function LoadMorePagination({ meta, onPageChanged, children, caption }) {
  const [pendingPage, setPendingPage] = useState();

  useEffect(() => {
    if (parseInt(pendingPage) && meta?.current_page === pendingPage)
      setPendingPage(null);
    if (meta === undefined) onPageChanged(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta]);

  const { current_page, per_page, to } = meta ?? {};

  const Paginator = () =>
    current_page * per_page > to ? null : (
      <Row className="mt-3 justify-content-center">
        {pendingPage ? (
          <Spinner animation="grow" />
        ) : (
          <Button
            variant="outline-secondary"
            onClick={() => {
              setPendingPage(current_page + 1);
              return onPageChanged(current_page + 1);
            }}
          >
            {caption}
            <SeeMoreIcon />
          </Button>
        )}
      </Row>
    );

  return meta ? (
    <Container>
      {children}
      <Paginator />
    </Container>
  ) : (
    <Container className="text-center">
      <Spinner animation="border" />
    </Container>
  );
}
