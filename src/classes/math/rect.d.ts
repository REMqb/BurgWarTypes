/**
 * @customConstructor Rect
 */
declare class rect {
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(mins: vec2, maxs: vec2);

    ComputeArea(): number;
    ComputeIntersection(other: rect): rect | undefined;
    Contains(pos: vec2): boolean;
    GetCorner(maxX: number, maxY: number): vec2;
    Intersect(other: rect): boolean;
}

/**
 * @noSelf
 */
declare function Rect(mins: vec2, maxs: vec2): rect;
