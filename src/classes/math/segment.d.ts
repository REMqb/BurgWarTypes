/**
 * @customConstructor Segment
 */
declare class segment {
    from: vec2;
    to: vec2;

    constructor(from: vec2, to: vec2);
}

/**
 * @noSelf
 */
declare function Segment(from: vec2, to: vec2): segment;
