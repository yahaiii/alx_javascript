#!/usr/bin/node

const BaseSquare = require('./5-rectangle');

class Square extends BaseSquare {
    constructor(size) {
        super(size);
    }

    charPrint (c) {
        if (c === undefined) {
            c = 'X';
        }

        for (let i = 0; i < this.height; i++) {
            console.log(c.repeat(this.width));
        }
    }
}

module.exports = Square;