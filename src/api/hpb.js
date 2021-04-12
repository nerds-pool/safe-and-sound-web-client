import axios from "axios";

const http = axios.create({
  baseURL: "https://www.hpb.health.gov.lk/api",
});

export const hpb = {
  get: {
    data: async () => await http.get("/get-current-statistical"),
  },
};
