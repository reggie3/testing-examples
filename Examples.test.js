describe("example tests", () => {
  // Basic synchronous test
  it("should add correctly ", () => {
    expect(add(1 + 1)).toEqual(2);
  });
  // Async test that
  it("should ", async () => {});
  it.each([
    [1, 2],
    [2, 4]
  ])("double(%d)", (input, expected) => {
    expect(double(input)).toBe(expected);
  });
  it.only("should ", () => {});
  it.skip("should ", () => {});
  it.todo("should ");
});
