declare type Weapon<Properties extends Property<string> = any, Structure = any> = Element<Properties, Structure> & {
    /*
     * Shared
     */
    GetOwnerEntity(): Entity;
    SetNextTriggerTime(nextTriggerTime: number): void;

    /*
     * Server
     */
    IsPlayingAnimation(): boolean;
    PlayAnim(animationName: string): void;
    Shoot(startPos: vec2, direction: vec2, damage: number): void;

    /*
     * Client
     */
    Shoot(startPos: vec2, direction: vec2, damage: number): void;
}

declare type WeaponTemplate<WeaponT extends Weapon> = ElementTemplate<WeaponT> & {
    Instance(element: Element): element is WeaponT;

    /*
        Sync
    */

    /**
     * Register a callback for the `Attack` event
     * @param callback callback to call
     */
    On(event: "Attack", callback: WeaponTemplate.AttackCallback<WeaponT>): void;
    /**
     * Register a callback for the `SwitchOn` event
     * @param callback callback to call
     */
    On(event: "SwitchOn", callback: WeaponTemplate.SwitchOnCallback<WeaponT>): void;
    /**
     * Register a callback for the `SwitchOff` event
     * @param callback callback to call
     */
    On(event: "SwitchOff", callback: WeaponTemplate.SwitchOffCallback<WeaponT>): void;
    /**
     * Register a callback for the `AttackFinish` event
     * @param callback callback to call
     */
    On(event: "AttackFinish", callback: WeaponTemplate.AttackFinishCallback<WeaponT>): void;

    /*
        Async
    */

    /**
     * Register an async callback for the `Attack` event
     * @param callback callback to call
     */
    On(event: "Attack", callback: WeaponTemplate.AttackCallback<WeaponT>): void;
    /**
     * Register an async callback for the `SwitchOn` event
     * @param callback callback to call
     */
    On(event: "SwitchOn", callback: WeaponTemplate.SwitchOnCallback<WeaponT>): void;
    /**
     * Register an async callback for the `SwitchOff` event
     * @param callback callback to call
     */
    On(event: "SwitchOff", callback: WeaponTemplate.SwitchOffCallback<WeaponT>): void;
    /**
     * Register an async callback for the `AttackFinish` event
     * @param callback callback to call
     */
    On(event: "AttackFinish", callback: WeaponTemplate.AttackFinishCallback<WeaponT>): void;
}

declare namespace WeaponTemplate {
    type AttackCallback<WeaponT extends Weapon> = (self: WeaponT) => void;
    type SwitchOnCallback<WeaponT extends Weapon> = (self: WeaponT) => void;
    type SwitchOffCallback<WeaponT extends Weapon> = (self: WeaponT) => void;
    type AttackFinishCallback<WeaponT extends Weapon> = (self: WeaponT) => void;
}
