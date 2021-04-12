import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:9000/.netlify/functions/api",
});

export const sas = {
  post: {
    signin: (body) => http.post("/auth/signin", body),
  },
  get: {},
  put: {},
  delete: {},
};
