import isNondot from "../src/index";
import { nonDotFiles } from "../src/non-dottted-dotfiles";


test("File in dictionary should work", () => {
  expect(isNondot("LICENSE")).toBe(true);
});

test("File not in dictionary should fail", () => {
  expect(isNondot("MINECRAFT")).toBe(false);
});

test("Not passing a string should throw error", () => {
  expect(() => {
    // @ts-ignore
    isNondot(42069);
  }).toThrow("fileName must be a string");
});

describe("All words return true", () => {

  nonDotFiles.forEach((word) => {
    test(`${word} should be true`, () => {
      expect(isNondot(word)).toBe(true);
    });
  });
});
