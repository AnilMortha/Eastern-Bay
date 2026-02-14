
import axios from "axios";

export const contact = axios.create({
  baseURL: "https://easternbaysolar.com/EasternBay_apis/",
  headers: {
    "Content-Type": "application/json",
  },
});
