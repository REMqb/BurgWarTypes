declare type Element<Properties extends Property<string> = any, Structure = unknown> = {
    [K in keyof Structure]: Structure[K];
} & {

    /*
     * Shared
     */
    DeleteOnRemove(other: Element): void;
    Disable(): void;
    Enable(): void;
    GetDirection(): vec2;
    GetPosition(): vec2;
    GetRotation(): number;
    GetScale(): vec2;
    IsEnabled(): boolean;
    IsLookingRight(): boolean;
    IsValid(): boolean;
    SetLifeTime(lifetime: number): void;
    SetScale(scale: number): void;
    ToLocalPosition(globalPosition: vec2): vec2;
    ToGlobalPosition(localPosition: vec2): vec2;
    Trigger(event: unknown, ...args: unknown[]): vec2;

    /*
     * Server
     */
    DealDamage(origin: vec2, damage: number, damageZone: rect, pushbackForce?: number): void;
    DumpCreationInfo(): object;
    GetLayerInde(): number;
    GetOwner(): object;
    GetProperty<Name extends Properties["Name"]>(name: Name): NonNullable<DiscriminateUnionByType<DiscriminateUnionByName<Name, Properties>["Type"], Property<string>>["Default"]>;
    SetParent(parent: object): void;

    /**
     * Client
     */
    AddSprite(parameters: object): object;
    AddModel(parameters: object): void;
    DealDamage(origin: vec2, damage: number, damageZone: rect, pushbackForce?: number): void;
    GetLayerInde(): number;
    GetProperty<Name extends Properties["Name"]>(name: Name): NonNullable<DiscriminateUnionByType<DiscriminateUnionByName<Name, Properties>["Type"], Property<string>>["Default"]>;
    PlaySound(path: string, isAttachedToEntity: boolean, isLooping: boolean, isSpatialized: boolean): void;


    //SetProperty<Name extends Properties["Name"]>(name: Name, value: DiscriminateUnionByType<DiscriminateUnionByName<Name, Properties>["Type"], Property<string>>["Default"]): void;
};

declare interface ElementTemplate<ElementT extends Element> {
    Instance(element: Element): element is ElementT;

    /*
        Sync
    */

    /*On<E extends string, C extends Function>(event: E, callback: C): void;
    OnAsync<E extends string, C extends Function>(event: E, callback: C): void;*/

    /**
     * Register a callback for the `CollisionStart` event
     * @param callback callback to call
     */
    On(event: "CollisionStart", callback: ElementTemplate.CollisionStartCallback<ElementT>): void;
    /**
     * Register a callback for the `Death` event
     * @param callback callback to call
     */
    On(event: "Death", callback: ElementTemplate.DeathCallback<ElementT>): void;
    /**
     * Register a callback for the `Destroyed` event
     * @param callback callback to call
     */
    On(event: "Destroyed", callback: ElementTemplate.DestroyedCallback<ElementT>): void;
    /**
     * Register a callback for the `Died` event
     * @param callback callback to call
     */
    On(event: "Died", callback: ElementTemplate.DiedCallback<ElementT>): void;
    /**
     * Register a callback for the `HealthUpdate` event
     * @param callback callback to call
     */
    On(event: "HealthUpdate", callback: ElementTemplate.HealthUpdateCallback<ElementT>): void;
    /**
     * Register a callback for the `Init` event
     * @param callback callback to call
     */
    On(event: "Init", callback: ElementTemplate.InitCallback<ElementT>): void;
    /**
     * Register a callback for the `ScaleUpdate` event
     * @param callback callback to call
     */
    On(event: "ScaleUpdate", callback: ElementTemplate.ScaleUpdateCallback<ElementT>): void;
    /**
     * Register a callback for the `Tick` event
     * @param callback callback to call
     */
    On(event: "Tick", callback: ElementTemplate.TickCallback<ElementT>): void;
    /**
     * `[Client only]`
     *
     * Register a callback for the `Frame` event
     * @param callback callback to call
     */
    On(event: "Frame", callback: ElementTemplate.FrameCallback<ElementT>): void;
    /**
     * `[Client only]`
     *
     * Register a callback for the `PostFrame` event
     * @param callback callback to call
     */
    On(event: "PostFrame", callback: ElementTemplate.PostFrameCallback<ElementT>): void;

    /*
        Async
    */

    /**
     * Register an async callback for the `Death` event
     * @param callback callback to call
     */
    OnAsync(event: "Death", callback: ElementTemplate.DeathCallback<ElementT>): void;
    /**
     * Register an async callback for the `Destroyed` event
     * @param callback callback to call
     */
    OnAsync(event: "Destroyed", callback: ElementTemplate.DestroyedCallback<ElementT>): void;
    /**
     * Register an async callback for the `Died` event
     * @param callback callback to call
     */
    OnAsync(event: "Died", callback: ElementTemplate.DiedCallback<ElementT>): void;
    /**
     * Register an async callback for the `HealthUpdate` event
     * @param callback callback to call
     */
    OnAsync(event: "HealthUpdate", callback: ElementTemplate.HealthUpdateCallback<ElementT>): void;
    /**
     * Register an async callback for the `Init` event
     * @param callback callback to call
     */
    OnAsync(event: "Init", callback: ElementTemplate.CollisionStartCallback<ElementT>): void;
    /**
     * Register an async callback for the `ScaleUpdate` event
     * @param callback callback to call
     */
    OnAsync(event: "ScaleUpdate", callback: ElementTemplate.ScaleUpdateCallback<ElementT>): void;
    /**
     * Register an async callback for the `Tick` event
     * @param callback callback to call
     */
    OnAsync(event: "Tick", callback: ElementTemplate.TickCallback<ElementT>): void;
    /**
     * `[Client only]`
     *
     * Register an async callback for the `Frame` event
     * @param callback callback to call
     */
    OnAsync(event: "Frame", callback: ElementTemplate.FrameCallback<ElementT>): void;
    /**
     * `[Client only]`
     *
     * Register an async callback for the `PostFrame` event
     * @param callback callback to call
     */
    OnAsync(event: "PostFrame", callback: ElementTemplate.PostFrameCallback<ElementT>): void;
}

declare namespace ElementTemplate {

    /**
     * Called whenever this element collides with another one.
     * @param self Triggered entity.
     * @param other Triggering entity.
     * @returns `false` to prevent the collision, `true` to let the collision go on.
     *
     * Return combination:
     * &&
     *
     * Remarks:
     * {@Link Entity.EnableCollisionCallbacks} must have been called on the entity for this event to trigger.
     *
     * Example code:
     * ```ts
     *      ElementTemplate.On("Init", self => self.EnableCollisionCallbacks(true));
     *
     *      ElementTemplate.On("CollisionStart", (self, other) => {
     *           print("I collided with " + tostring(other));
     *           return true;
     *      });
     * ```
     * @noSelf
     */
    type CollisionStartCallback<ElementT extends Element> = (self: ElementT, other: Entity) => boolean;

    /**
     * Called whenever this element is about to die (after its health fell to zero).
     * @param self Triggered entity.
     * @param attacker `[Server only]` Triggered entity.
     *
     * Remarks:
     *
     * 1) The HealthUpdate event is always triggered before this event, and the Died event is always triggered after this event.
     * 2) This event is only called for entities with life.
     * 3) `[Server only]` This is the last event in which you can prevent the entity to die by updating its health.
     * 4) `[Client only]` The HealthUpdate => Death => Die event chain is only triggered if the entity death has been validated by the server. This means that if you resurrect the entity in the Death event server-side, only a HealthUpdate event will be generated client-side.
     *
     * Example code:
     * ```ts
     *                 ElementTemplate.On("Death", self => {
     *                     print("I'm dying");
     *                 });
     * ```
     */
    type DeathCallback<ElementT extends Element> = (self: ElementT, attacker?: Entity) => void;

    /**
     * Called whenever this element is about to get removed from the match.
     * @param self Triggered entity.
     *
     * Remarks:
     * 1) As this event doesn't return anything, it's possible to bind an async callback on it. However one must be careful when doing so, as the entity will no longer exists on the very next tick.
     *
     * Example code:
     * ```ts
     *              ElementTemplate.On("Destroyed", self => {
     *                 print("I will no longer exist next tick!");
     *              });
     * ```
     */
    type DestroyedCallback<ElementT extends Element> = (self: ElementT) => void;

    /**
     * Called whenever this element died (after its health fell to zero).
     * @param self Triggered entity.
     * @param attacker `[Server only]` Triggered entity.
     *
     * Remarks:
     * 1) The HealthUpdate and Death events are always triggered before this event, in this order.
     * 2) This is the last event that will be generated by this entity before its destruction (see the Destroyed event), reviving it is not possible at this point (use the Death event if you wish to revive an entity).
     * 3) This event is only called for entities with life, use the Destroyed event to monitor other entities destruction.
     * 4) `[Client only]` The HealthUpdate => Death => Died event chain is only triggered if the entity death has been validated by the server. This means that if you resurrect the entity in the Death event server-side, only a HealthUpdate event will be generated client-side.
     *
     *
     * Example code:
     * ```ts
     *                 ElementTemplate.On("Died", self => {
     *                     print("I'm dead");
     *                 });
     * ```
     */
    type DiedCallback<ElementT extends Element> = (self: ElementT, attacker?: Entity) => void;

    /**
     * Called whenever this element health changes (whether it be damage or health).
     * @param self Triggered entity.
     * @param newHealth The new health value.
     * @param dealer `[Server only]` The entity that caused the health change.
     *
     * Remarks:
     * 1) This event is triggered before the health is applied to the entity, thus you can retrieve the current health by using `self.GetHealth()`.
     * 2) Killing an entity with `Element.Kill()` will always trigger a health update with zero as the new health value.
     * 3) If `newHealth` is zero then the death event chain (Death => Died => Destroyed) will be triggered right after it returns.
     * 4) This event is only called for entities with life.
     *
     * Example code:
     * ```ts
     *               ElementTemplate.On("HealthUpdate", (self, newHealth) => {
     *                   print("HealthUpdated");
     *               });
     * ```
     */
    type HealthUpdateCallback<ElementT extends Element> = (self: ElementT, newHealth: number, dealer?: Entity) => void;

    /**
     * Called right after the entity creation, this event is used to initialize the element and its variables.
     * @param self Initializing entity.
     *
     * Remarks:
     * 1) This event is guaranteed to be the first to be triggered.
     *
     * Example code:
     * ```ts
     *              ElementTemplate.On("Init", (self) {
     *                  self.Variable = 42;
     *              });
     * ```
     */
    type InitCallback<ElementT extends Element> = (self: ElementT) => void;

    type ScaleUpdateCallback<ElementT extends Element> = (self: ElementT) => void;

    type TickCallback<ElementT extends Element> = (self: ElementT) => void;

    type FrameCallback<ElementT extends Element> = (self: ElementT) => void;

    type PostFrameCallback<ElementT extends Element> = (self: ElementT) => void;



}
