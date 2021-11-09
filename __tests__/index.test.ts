import nondot from "../src/index";
import fs from "fs";

test("File in dictionary should work", () => {
  expect(nondot("LICENSE")).toBe(true);
});

test("File not in dictionary should fail", () => {
  expect(nondot("MINECRAFT")).toBe(false);
});

test("Not passing a string should throw error", () => {
  expect(() => {
    // @ts-ignore
    nondot(42069);
  }).toThrow("fileName must be a string");
});

describe("All words return true", () => {
  const wordList = fs
    .readFileSync(__dirname + "/../src/non-dottted-dotfiles.txt", "utf8")
    .split("\n");

  wordList.forEach((word) => {
    test(`${word} should be true`, () => {
      expect(nondot(word)).toBe(true);
    });
  });
});
