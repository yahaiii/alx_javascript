#!/usr/bin/node

/* A class Rectangle that defines a rectangle with a width and height.
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
}

module.exports = Rectangle;