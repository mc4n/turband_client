import { useState } from "react";

export default function useResult() {
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState();

  return {
    reset: () => {
      setErrors(null);
      setData();
    },
    data: errors === null && data,
    errors,
    isPending: errors === undefined,
    getResult: (promise, success = null, fail = null) => {
      setErrors(undefined);
      promise
        .then((response) => {
          if (response.status === 200) {
            setData(response.data);
            success && success(response.data);
          } else {
            setData(response);
            success && success(response);
          }
          setErrors(null);
        })
        .catch(({ response }) => {
          if (response.status === 422) {
            setErrors(response.data);
            fail && fail(response.data);
          } else {
            setErrors(null);
            fail && fail(response);
          }
        });
    },
  };
}
