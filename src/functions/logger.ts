import color from "chalk";

export const Logger = (Type: boolean, Message: string) => {
  if (Type) {
    console.log(color.white.bgRedBright(Message));
  } else {
    console.log(color.white.bgGreen(Message));
  }
};
