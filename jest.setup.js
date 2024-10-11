import "@testing-library/jest-dom";

// Update when writing tests for adding Ids.
// https://github.com/ai/nanoid/issues/363
jest.mock("nanoid", () => {
  return {
    nanoid: () => {},
  };
});
