#!/usr/bin/node

/* A class Rectangle that defines a rectangle with a width and height.
*/

class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;

        // if w or h is 0 or not positive integer, create an empty object
        if (w <= 0 || h <= 0 || w % 1 !== 0 || h % 1 !== 0) {
            return new Rectangle();
        }
    }
}



module.exports = Rectangle;