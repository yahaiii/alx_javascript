/**
 * Print a rectangle of X characters with the given width and height.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 */
class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
        // If w or h is <= 0 or not a positive integer, create an empty object
        return this;
      } else {
        // Initialize width and height attributes with the provided values
        this.width = w;
        this.height = h;
      }
    }
  
    /**
     * Print a rectangle of X's with the specified height and width.
     * If both height and width are provided, it will print a rectangle
     * with the specified dimensions.
     */
    print() {
      // Check if both height and width are defined
      if (this.height && this.width) {
        // Loop through each row
        for (let i = 0; i < this.height; i++) {
          // Print a row of X's with the specified width
          console.log('X'.repeat(this.width));
        }
      }
    }
  
    rotate() {
      // Check if both height and width are defined
      if (this.height && this.width) {
        // Loop through each row
        for (let i = 0; i < this.width; i++) {
          // Print a column of X's with the specified height
          console.log('X'.repeat(this.height));
        }
      }
    }

    double() {
      this.width *= 2;
      this.height *= 2;
    }
  }
  
  module.exports = Rectangle;
  