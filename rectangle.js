function Rectangle(leftX, bottomY, width, height) {
  this.leftX = leftX
  this.bottomY = bottomY
  this.width = width
  this.height = height
  }

Rectangle.prototype.findLeftX = function(rectangle2) {
  if (this.leftX < rectangle2.leftX) {
    var rectangle3LeftX = rectangle2.leftX
  } else {
    var rectangle3LeftX = this.leftX
  }
  return rectangle3LeftX
}

Rectangle.prototype.findBottomY = function(rectangle2) {
  if (this.bottomY < rectangle2.bottomY) {
    var rectangle3BottomY = rectangle2.bottomY
  } else {
    var rectangle3BottomY = this.bottomY
  }
  return rectangle3BottomY
}

Rectangle.prototype.findWidth = function(rectangle2) {
  if (this.width < rectangle2.width) {
    var rectangle3BottomY = (rectangle2.bottomX + rectangle2.width) - (this.bottomX + this.width)
  } else {
    var rectangle3BottomY = (this.bottomX + this.width) - (rectangle2.bottomX + rectangle2.width)
  }
  return rectangle3BottomY
}

module.exports = Rectangle
