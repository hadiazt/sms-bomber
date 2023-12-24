import { Attacker } from "./attacker";

export const Validator = async (Num: string, Loop: string) => {
  return new Promise((resolve, reject) => {
    let Count: number = 0;

    if (isNaN(parseFloat(Num))) {
      reject("Wrong Phone Number Type(Must Be Number)");
    } else if (isNaN(parseFloat(Loop))) {
      reject("Wrong Loop Type(Must Be Number)");
    } else {
      if (Num.startsWith("+98")) Num = Num.split("+98")[1];
      if (Num.startsWith("09")) Num = Num.split("0")[1];

      const loop = setInterval(() => {
        Count++;
        if (Count === Number(Loop) + 1) {
          clearInterval(loop);
          resolve("Process Finished");
        } else {
          Attacker(Number(Num));
        }
      }, 1000);
    }
  });
};
