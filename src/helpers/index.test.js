import { getLetterMatch } from "./";

describe("getLetterMatchCount", () => {
  const secretWord = "party";

  test("returns correct count when there are no matching letters", () => {
    const letterMatchCount = getLetterMatch("bones", secretWord);

    expect(letterMatchCount).toBe(0);
  });

  test("returns the correct count when there are three matching letters", () => {
    const letterMatchCount = getLetterMatch("train", secretWord);

    expect(letterMatchCount).toBe(3);
  });

  test("returns the correct count when there are duplicate letters in guess", () => {
    const letterMatchCount = getLetterMatch("parka", secretWord);

    expect(letterMatchCount).toBe(3);
  });
});
