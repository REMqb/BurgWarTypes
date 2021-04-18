
declare type Entity<Properties extends Property<string> = any, Structure = unknown> = Element<Properties, Structure> & {

    /*
     * Shared
     */
    ApplyImpulse(force: vec2): void;
    Damage(damage: null, attacker?: Entity): void;
    ForceSleep(): void;
    GetColliders(): unknown;
    GetHealth(): number;
    GetMass(): unknown | undefined;
    GetMomentOfInertia(): unknown | undefined;
    GetPlayerMovementController(): PlayerMovementController;
    GetPlayerMovementSpeed(): vec2;
    /**
     * @tupleReturn
     */
    GetPlayerJumpHeight(): [jumpHeight: number, jumpBoostHeigh: number];
    GetUpVector(): vec2;
    GetVelocity(): vec2;
    Heal(value: number, healerEntity?: Entity): void;
    InitWeaponWielder(wielderData: unknown): void;
    IsFullHealth(): boolean;
    InitRigidBody(mass: number): void;
    IsPlayerOnGround(): boolean;
    IsSleeping(): boolean;
    Kill(): void;
    OverrideMovementController(fn: unknown): void;
    Remove(): void;
    SetAngularVelocity(velocity: number): void;
    SetColliders(colliders: unknown[]): void;
    SetDirection(up: vec2): void;
    SetMass(mass: number): void;
    SetMomentOfInertia(momentum: number): void;
    SetPosition(position: vec2): void;
    SetRotation(rotation: number): void;
    SetVelocity(velocity: vec2): void;
    UpdateInputs(inputs: unknown): void;
    UpdatePlayerMovementController(controller: PlayerMovementController): void;
    UpdatePlayerMovementSpeed(newSpeed: number): void;
    UpdatePlayerJumpHeight(newJumpHeight: number, newJumpBoostHeight: number): void;


    /*
     * Server
     */
    GetWeaponCount(): number;
    GiveWeapon(weaponClass: string): Weapon;
    HasWeapon(): boolean;
    RemoveWeapon(weaponClass: string): void;
    SelectWeapon(weaponClass: string): boolean;


    /*
     * Client
     */
    AddLayer(parameters: object): void;
    AddTilemap(mapSize: vec2, cellSize: vec2, content: object, tiles: unknown[], renderOrder?: number): Tilemap;
    ClearLayers(): void;
}

declare type EntityTemplate<EntityT extends Entity> = ElementTemplate<EntityT> & {
    Instance(element: Element): element is EntityT;

    /*
        Sync
    */

    /**
     * Register a callback for the `InputUpdate` event
     * @param callback callback to call
     */
    On(event: "InputUpdate", callback: EntityTemplate.InputUpdateCallback<EntityT>): void;

    /*
        Async
    */

    /**
     * Register an callback for the `InputUpdate` event
     * @param callback callback to call
     */
    OnAsync(event: "InputUpdate", callback: EntityTemplate.InputUpdateCallback<EntityT>): void;
}

declare namespace EntityTemplate {
    type InputUpdateCallback<EntityT extends Entity> = (this: void, self: EntityT) => void;
}
