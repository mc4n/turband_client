import axios from "axios";

export async function fetchData(url, withCredentials = false) {
  return axios.get(url, {
    withCredentials,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export async function postDataMultipart(url, data, withCredentials = true) {
  return axios.post(url, data, {
    withCredentials,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function postData(url, data, withCredentials = true) {
  return axios.post(url, data, {
    withCredentials,
    headers: {
      Accept: "application/json",
    },
  });
}

export async function putData(url, data, withCredentials = true) {
  return axios.put(url, data, {
    withCredentials,
    headers: {
      Accept: "application/json",
    },
  });
}

export async function putDataMultipart(url, data, withCredentials = true) {
  data.append("_method", "put");
  return axios.post(url, data, {
    withCredentials,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function deleteData(url, withCredentials = true) {
  return axios.delete(url, {
    withCredentials,
    headers: {
      Accept: "application/json",
    },
  });
}
