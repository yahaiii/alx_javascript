#!/usr/bin/node
/*  a class Square that defines a square and *   inherits from Rectagle
*/

import { Rectangle } from './4-rectangle';

class Square extends Rectangle {
    constructor(size) {
        super(size, size)
    }
}

export default Square;
