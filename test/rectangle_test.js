assert = require('chai').assert;
const Rectangle = require('../rectangle')
// const findLove = require('../rectangle').findLove

describe("Rectangle", function(){
  const rectangle1 = new Rectangle(1, 2, 6, 3)
  const rectangle2 = new Rectangle(4, 2, 6, 3)
  describe("attributes", function() {
    it("can create 2 rectangles", function() {

      assert.equal(rectangle1.leftX, 1);
      assert.equal(rectangle1.bottomY, 2);
      assert.equal(rectangle1.width, 6);
      assert.equal(rectangle1.height, 3);
      assert.equal(rectangle2.leftX, 4);
      assert.equal(rectangle2.bottomY, 2);
      assert.equal(rectangle2.width, 6);
      assert.equal(rectangle2.height, 3);
    })
  })

  describe("methods", function() {
    it("can find the leftX of rectangle 3 from the intersection of 2 rectangles", function() {
      assert.equal(rectangle1.findLove(rectangle2), 4)
    })
  })
})
