import { createContext } from "react";
import { API_URL } from "../constants";
import { fetchData, postData, putDataMultipart } from "../utils/axios";
import makeQuery from "../utils/query";

class ApiHelper {
  constructor() {
    this.baseURL = API_URL;
  }

  user = {
    signUp: (_payload) => postData(this.baseURL + "/user", _payload),
    changePassword: (_payload) =>
      putDataMultipart(this.baseURL + "/user", _payload),
  };

  definition = {
    add: (_payload) => postData(this.baseURL + "/definitions", _payload),
    query: (_params) =>
      fetchData(makeQuery(this.baseURL + "/definitions", _params), true),
  };
}

const ApiContext = createContext(new ApiHelper());

export { ApiContext };

export default function ApiProvider({ children }) {
  return (
    <ApiContext.Provider value={new ApiHelper()}>
      {children}
    </ApiContext.Provider>
  );
}
