import { Attacker } from "./attacker";
import { Logger } from "./logger";

export const Validator = async (Num: string, Loop: string) => {
  let Count: number = 0;

  if (isNaN(parseFloat(Num))) {
    return Logger(true, "ERROR :\nWrong Phone Number Type(Must Be Number)");
  } else if (isNaN(parseFloat(Loop))) {
    return Logger(true, "ERROR :\nWrong Loop Type(Must Be Number)");
  } else {
    if (Num.startsWith("+98")) Num = Num.split("+98").join("");
    else if (Num.startsWith("09")) Num = Num.slice(1);

    const loop = setInterval(() => {
      if (Count === Number(Loop)) {
        clearInterval(loop);
        Logger(false, "Process Finished");
      } else {
        Attacker(Number(Num), Loop)
          .then((res: string) => {
            Count++;
            Logger(false, res + ` Request : ${Count}`);
          })
          .catch((e: string) => {
            Logger(true, e);
          });
      }
    }, 1000);
  }
};
