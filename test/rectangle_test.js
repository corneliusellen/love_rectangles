assert = require('chai').assert;
const Rectangle = require('../rectangle')
// const findLove = require('../rectangle').findLove

describe("Rectangle", function(){
  const rectangle1 = new Rectangle(1, 1, 6, 3)
  const rectangle2 = new Rectangle(4, 2, 3, 3)
  describe("attributes", function() {
    it("can create 2 rectangles", function() {

      assert.equal(rectangle1.leftX, 1);
      assert.equal(rectangle1.bottomY, 1);
      assert.equal(rectangle1.width, 6);
      assert.equal(rectangle1.height, 3);
      assert.equal(rectangle2.leftX, 4);
      assert.equal(rectangle2.bottomY, 2);
      assert.equal(rectangle2.width, 3);
      assert.equal(rectangle2.height, 3);
    })
  })

  describe("methods", function() {
    it("can find the leftX of rectangle 3 from the intersection of 2 rectangles", function() {
      assert.equal(rectangle1.findLeftX(rectangle2), 4)
    })

    it("can find the bottomyY of rectangle 3 from the intersection of 2 rectangles", function() {
      assert.equal(rectangle1.findBottomY(rectangle2), 2)
    })

    it("can find the width of rectangle 3 from the intersection of 2 rectangles", function() {
      assert.equal(rectangle1.findWidth(rectangle2), 3)
    })

    it("can find the height of rectangle 3 from the intersection of 2 rectangles", function() {
      assert.equal(rectangle1.findHeight(rectangle2), 2)
    })
  })
})
