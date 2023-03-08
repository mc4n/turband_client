import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { LoadMorePagination } from "../../core/Paginations";
import useApiService from "../../hooks/useApiService";
import useResult from "../../hooks/useResult";

export default function List() {
  const { definition } = useApiService();
  const { getResult, data } = useResult();

  const [list, setList] = useState([]);

  useEffect(() => {
    if (data) setList([...list, ...data.data]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Container>
      <LoadMorePagination
        meta={data}
        caption={"Daha fazla gör"}
        onPageChanged={(page) => {
          getResult(definition.query({ word: null, include: "word", page }));
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
