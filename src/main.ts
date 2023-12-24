import color from "chalk";
import promptSync from "prompt-sync";
import { Validator } from "./functions/validator";

const Entry = promptSync();
const Number = Entry(
  color.black.bgYellow("Please Enter Victim Phone Number : ")
);
const Loop = Entry(
  color.black.bgYellow("How Many Message You Want To Send : ")
);

Validator(Number, Loop)