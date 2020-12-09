


/**
 * @noSelf
 */
declare namespace physics {
    /**
     * Creates a spring constraint between two entities.
     * @param first First entity of the constraint.
     * @param second Second entity of the constraint.
     * @param firstAnchor First entity position offset to attach the constraint to.
     * @param secondAnchor Second entity position offset to attach the constraint to.
     * @param restLength The distance the springs want to be.
     * @param stiffness Spring constant (see [Young's modulus](http://en.wikipedia.org/wiki/Young's_modulus)).
     * @param damping How soft to make the damping of the spring.
     * @returns The newly created constraint.
     */
    function CreateDampenedSpringConstraint(first: Entity, second: Entity, firstAnchor: vec2, secondAnchor: vec2, restLength: number, stiffness: number, damping: number): DampedSpringConstraint;

    /**
     * Creates a pin constraint between two entities.
     * @param first First entity of the constraint.
     * @param second Second entity of the constraint.
     * @param firstAnchor First entity position offset to attach the constraint to.
     * @param secondAnchor Second entity position offset to attach the constraint to.
     * @returns The newly created constraint.
     */
    function CreatePinConstraint(first: Entity, second: Entity, firstAnchor: vec2, secondAnchor: vec2): PinConstraint;

    /**
     * Creates a pivot constraint between two entities.
     * @param first First entity of the constraint.
     * @param second Second entity of the constraint.
     * @param firstAnchor First entity position offset to attach the constraint to.
     * @param secondAnchor Second entity position offset to attach the constraint to.
     * @returns The newly created constraint.
     */
    function CreatePivotConstraint(first: Entity, second: Entity, firstAnchor: vec2, secondAnchor: vec2): PivotConstraint;

    /**
     * Creates a rotary limit constraint between two entities.
     * @param first First entity of the constraint.
     * @param second Second entity of the constraint.
     * @param minAngle Minimum angular limit in degrees.
     * @param maxAngle Maximum angular limit in degrees.
     * @returns The newly created constraint.
     */
    function CreateRotaryLimitConstraint(first: Entity, second: Entity, minAngle: number, maxAngle: number): RotaryLimitConstraint;

    /**
     * Queries a rectangular region in the world and calls a callback for every entity intersecting it.
     * @param layer The layer to query.
     * @param rect The intersecting rectangle.
     * @param callback A function that will be called for every entity intersecting the rectangle.
     */
    function RegionQuery(layer: number, rect: rect, callback: RegionQueryCallback): void;

    /**
     * Trace a ray between two positions and returns the first hit entity data.
     * @param layer The layer to query.
     * @param startPos The starting position of the ray.
     * @param endPos The end position of the ray.
     * @returns An object containing data about the intersection (or null if no entity was hit).
     */
    function Trace(layer: number, startPos: vec2, endPos: vec2): TraceResult | null;

    /**
     * Trace a ray between two positions and calls a function for every hit entity.
     * @param layer The layer to query.
     * @param startPos The starting position of the ray.
     * @param endPos The end position of the ray.
     * @param callback The callback that will be called for every entity with an object containing data about the intersection.
     *
     * Remarks:
     * 1) There is not particular order in which the callback will be called, if you want to have code executed for every entity a particular order, for example nearest to furthest you have to store all entities in a table and order it by fraction once this function returns and iterate from there.
     * 2) If you're only interested with the nearest hit, consider using the more efficient {@link physics.Trace} function.
     */
    function TraceMultiple(layer: number, startPos: vec2, endPos: vec2, callback: TraceMultipleCallback): void;

    type RegionQueryCallback = (this: void, entity: Entity) => void;

    interface TraceResult {
        /**
         * A number ranging from 0 to 1 indicating how far the ray travelled before hitting the entity.
         */
        fraction: number;

        /**
         * The hit position.
         */
        hitPos: vec2;

        /**
         * The hit normal.
         */
        hitNormal: vec2;

        /**
         * The hit entity.
         */
        hitEntity: Entity;
    }

    type TraceMultipleCallback = (this: void, result: TraceResult) => void;
}
