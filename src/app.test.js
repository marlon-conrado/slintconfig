const { getAlgo } = require("./app");

describe("app.js", () => {
  test("getAlgo() should get string", () => {
    expect(getAlgo()).toBe("algo");
  });
});
