import { FrozenDrinks } from "./frozenDrinks";

let frozenDrinks: FrozenDrinks;
let mockGetFavoriteMilkShake: any;

beforeEach(() => {
  frozenDrinks = new FrozenDrinks();
  mockGetFavoriteMilkShake = jest.spyOn(frozenDrinks, "getFavoriteMilkShake");
});

describe("Mock Example", () => {
  it("should return strawberry as favorite milkshake", () => {
    expect(frozenDrinks.getFavoriteMilkShake().toLowerCase()).toBe(
      "strawberry"
    );
  });
  it("should return banana as favorite milkshake", () => {
    mockGetFavoriteMilkShake.mockImplementation(() => "banana");
    expect(frozenDrinks.getFavoriteMilkShake().toLowerCase()).toBe("banana");
  });
});
