/**
 * @customConstructor Circle
 */
declare class circle {
    center: vec2;
    radius: number;

    constructor(center: vec2, radius: number);
}

/**
 * @noSelf
 */
declare function Circle(center: vec2, radius: number): circle;
