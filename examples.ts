// This is a pure function.
// All information it needs in order to work is passed as
// an argument or available as part of JS
export const add = (a: number, b: number) => {
  return a + b;
};

export const double = (a: number) => {
  return a * 2;
};

export const asyncDouble = (a: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(double(a));
    }, 1000);
  });
};

export const getAddressOfWhiteHouse = () => {
  return {
    street: "1600 Pennsylvania Ave NW",
    city: "Washington",
    state: "DC",
    zip: "20500"
  };
};
