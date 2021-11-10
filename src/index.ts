import { nonDotFiles } from "./non-dottted-dotfiles";

// convert the array into a map
const fileData = nonDotFiles.reduce((acc, curr) => ((acc[curr] = true), acc), {});

const isNondot = (fileName: string) => {
  if (typeof fileName !== "string") {
    throw new Error("fileName must be a string");
  }

  return fileData[fileName.toLowerCase()] !== undefined;
};

export default isNondot;
