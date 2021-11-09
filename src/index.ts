// TODO: maybe think about target runtime to support older node as well as browsers?
import fs from "fs";

const wordList = fs
  .readFileSync(__dirname + "/non-dottted-dotfiles.txt", "utf8")
  .split("\n");

// convert the array into a map
const fileData = wordList.reduce((acc, curr) => ((acc[curr] = true), acc), {});

const nondot = (fileName: string) => {
  if (typeof fileName !== "string") {
    throw new Error("fileName must be a string");
  }

  return fileData[fileName.toLowerCase()] !== undefined;
};

export default nondot;
