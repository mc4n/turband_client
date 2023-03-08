import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { LoadMorePagination } from "../../core/Paginations";
import useApiService from "../../hooks/useApiService";
import useResult from "../../hooks/useResult";
import ClearableInput from "../../core/ClearableInput";
import { useSearchParams } from "react-router-dom";

export default function List() {
  const { definition } = useApiService();
  const { getResult, data, reset } = useResult();

  const [list, setList] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (data) setList([...(list ?? []), ...data.data]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    reset();
    setList(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const word_ = e.target.word.value;
          setSearchParams(word_ && { word: word_ });
        }}
      >
        <ClearableInput placeholder="Ara..." name="word" />
      </Form>
      <LoadMorePagination
        meta={data}
        caption={"Daha fazla gör"}
        onPageChanged={(page) => {
          getResult(
            definition.query({
              word: searchParams?.get("word"),
              include: "word",
              page,
            })
          );
        }}
      >
        {list?.map((i) => {
          return (
            <ul key={i.id}>
              <h2>{i.word.word}: </h2>

              <p>{i.definition}</p>
            </ul>
          );
        })}
      </LoadMorePagination>
    </Container>
  );
}
