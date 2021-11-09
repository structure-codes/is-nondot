import nondot from "../src/index";

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
