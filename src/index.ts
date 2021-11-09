import fileData from "./non-dottted-dotfiles.json";

const nondot = (fileName: string) => {
  if (typeof fileName !== "string") {
    throw new Error("fileName must be a string");
  }

  return fileData[fileName.toLowerCase()] !== undefined;
};

export default nondot;
