import { add, double, asyncDouble, getAddressOfWhiteHouse } from "./examples";

// description block to help organize tests
describe("Basic Examples", () => {
  // Basic synchronous test
  it("should add correctly ", () => {
    expect(add(1, 1)).toEqual(2);
  });

  // Async test to test an async function
  it("should ", async () => {
    const result = await asyncDouble(4);
    expect(result).toEqual(8);
  });

  // "each" test
  // eash array takes arguments to be passed as inputs to
  // function under test with the expected result as the
  // last item in an array
  it.each([
    [1, 2],
    [2, 4]
  ])("double(%d)", (input, expected) => {
    expect(double(input)).toBe(expected);
  });

  //only run this test
  // it.only("should ", () => {});

  // skip this test
  it.skip("should ", () => {});

  // placeholder
  it.todo("should ");
});

describe("Snapshot Example", () => {
  it("should provide the correct address for the White House ", () => {
    expect(getAddressOfWhiteHouse()).toMatchSnapshot();
  });
  it("should provide the correct address for the White House (inline snapshot)", () => {
    expect(getAddressOfWhiteHouse()).toMatchInlineSnapshot(`
      Object {
        "city": "Washington",
        "state": "DC",
        "street": "1600 Pennsylvania Ave NW",
        "zip": "20500",
      }
    `);
  });
});
