function Rectangle(leftX, bottomY, width, height) {
  this.leftX = leftX
  this.bottomY = bottomY
  this.width = width
  this.height = height
  }

Rectangle.prototype.findLove = function(rectangle2) {
  if (this.leftX < rectangle2.leftX) {
    var rectangle3LeftX = rectangle2.leftX
  } else {
    var rectangle3LeftX = this.leftX
  }
  return rectangle3LeftX
}

module.exports = Rectangle
