/*  a class Square that defines a square and *   inherits from Rectagle
*/
const { Rectangle } = require('4-rectangle');

class Square extends Rectangle {
    constructor(size) {
        super(size, size)
    }
}

module.exports = { Rectangle, Square };