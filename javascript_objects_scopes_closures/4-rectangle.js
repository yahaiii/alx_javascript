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
    // Store the original width and height values
    const originalWidth = this.width;
    const originalHeight = this.height;

    // Set the width and height attributes to the height and width, respectively
    this.width = this.height;
    this.height = originalWidth;

    // Restore the width and height attributes to their original values
    this.width = originalWidth;
    this.height = originalHeight;
  }

  double() {
    // Double the width and height
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Rectangle;