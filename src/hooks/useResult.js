import { useState } from "react";

export default function useResult() {
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState();

  return {
    data: errors === null && data,
    errors,
    isPending: errors === undefined,
    getResult: (promise, callback = null) => {
      setErrors(undefined);
      promise
        .then((response) => {
          if (response.status === 200) {
            setData(response.data);
            callback && callback(response.data);
          } else {
            setData(response);
            callback && callback(response);
          }
          setErrors(null);
        })
        .catch(({ response }) => {
          if (response.status === 422) setErrors(response.data);
          else setErrors(null);
        });
    },
  };
}
