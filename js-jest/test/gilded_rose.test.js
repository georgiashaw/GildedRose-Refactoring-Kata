const {Shop, Item} = require("../src/gilded_rose");
const runOutput = require('./texttest_fixture')

describe("Gilded Rose", function() {
  // it("should foo", function() {
  //   const gildedRose = new Shop([new Item("foo", 0, 0)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].name).toBe("fixme");
  // });

  it('Golden master', () => {
    const output = runOutput();
    expect(output).toMatchSnapshot()
  })
});
