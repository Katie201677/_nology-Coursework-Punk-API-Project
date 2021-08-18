import { extractYear } from "./extractYear.service";

describe("tests for extractYear function", () => {
  it("should remove the month and return the year only", () => {
    const testYear = "08/2034";
    expect(extractYear(testYear)).toEqual(2034);
  });

  it("should return invalid year if the incorrect format is passed in", () => {
    const testYear = "06.2056";
    expect(extractYear(testYear)).toEqual("Invalid year");
  })

  it("should return invalid year if the incorrect format is passed in", () => {
    const testYear = "testInvalidString";
    expect(extractYear(testYear)).toEqual("Invalid year");
  })
})