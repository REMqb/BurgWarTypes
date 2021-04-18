declare type vec2 = number & {
    x: number;
    y: number;

    Distance(other: vec2): number;
    DistanceTest(other: vec2, distance: number): boolean;

    /**
     * @tupleReturn
     */
    GetNormalized(): [normal: vec2, length: number];
    Length(): number;
    Normalize(): number;
    SquaredLength(): number;
    SquaredDistance(other: vec2): number;
}
/**
 *
 * @param x
 * @param y
 * @noSelf
 */
declare function Vec2(x?: number, y?: number): vec2;
