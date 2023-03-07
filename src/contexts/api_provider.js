import { createContext } from "react";
import { API_URL } from "../constants";
import { postData, putDataMultipart } from "../utils/axios";

class ApiHelper {
  constructor() {
    this.baseURL = API_URL;
  }

  user = {
    signUp: (_payload) => postData(this.baseURL + "/user", _payload),
    changePassword: (_payload) =>
      putDataMultipart(this.baseURL + "/user", _payload),
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
