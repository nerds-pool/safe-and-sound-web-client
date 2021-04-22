import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:9000/.netlify/functions/api",
});
// api end points
export const sas = {
  post: {
    // auth
    signin: (body) => http.post("/auth/signin", body),
    signup: (body) => http.post("/auth/signup", body)
  },
  get: {
    // user
    fetchUserByNic: (nic) => http.get(`/user/fetch/${nic}`),
    covidPositiveUsers: () => http.get(`/user/covid-positive`),
    //visit
    fetchVisitAssociatesByUserNic: (nic) => http.get(`/visit/${nic}`),

  },
  put: {
    

  },
  delete: {
    // user
    user: () =>  http.delete(`/user/delete/${nic}`)

  },
};
