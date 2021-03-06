import axios from "axios";

const http = axios.create({
  baseURL: "https://safe-and-sound.netlify.app/.netlify/functions/api",
  timeout: 10000,
});

http.interceptors.request.use(
  (config) => {
    const signToken = localStorage.getItem("signToken");
    if (signToken) {
      config.headers["Authorization"] = `Bearer ${signToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// api end points
export const sas = {
  post: {
    signin: (body) => http.post("/auth/signin", body),
    signup: (body) => http.post("/auth/signup", body),
    newLocation: (body) => http.post("/location/new", body),
  },
  get: {
    fetchUserByNic: (nic) => http.get(`/user/fetch/${nic}`),
    covidPositiveUsers: () => http.get(`/user/covid-positive`),
    fetchVisitAssociatesByUserNic: (nic) => http.get(`/visit/${nic}`),
  },
  put: {},
  delete: {
    user: (nic) => http.delete(`/user/delete/${nic}`),
  },
};
