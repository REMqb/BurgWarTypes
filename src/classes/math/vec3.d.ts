declare type vec3 = number & {
    x: number;
    y: number;
    z: number;

    Distance(other: vec3): number;

    /**
     * @tupleReturn
     */
    Length(): number;
    Normalize(): [self: vec3, length: number];
    SquaredLength(): number;
    SquaredDistance(other: vec3): number;
}

/**
 *
 * @param x
 * @param y
 * @param z
 * @noSelf
 */
declare function Vec3(x?: number, y?: number, z?: number): vec3;
