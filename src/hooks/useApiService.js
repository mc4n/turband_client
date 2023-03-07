import { useContext } from "react";
import { ApiContext } from "../contexts/api_provider";

export default function useApiService() {
  return useContext(ApiContext);
}
