/**
 * @noSelf
 */
declare namespace match {
    /**
     * `[Server only]`
     *
     * Broadcast a custom packet to all players in the game.
     * @param packet Packet to send.
     */
    function BroadcastPacket(packet: OutgoingNetworkPacket): void;

    /**
     * Creates a new entity in the match.
     * @param parameters An object describing all parameters to create the entity.
     */
    function CreateEntity(parameters: CreateEntityParameters): Entity;

    /**
     * Creates a new weapon in the match.
     * @param parameters An object describing all parameters to create the weapon.
     */
    function CreateWeapon(parameters: CreateWeaponParameters): Weapon;

    /**
     * `[Client only]`
     *
     * Retrieves the local player camera.
     */
    function GetCamera(): Camera;

    /**
     * Retrieves all entities belonging to a particular class (and possibly on a layer).
     * @param clazz The entity class to find.
     * @param layer If specified, only entities belonging to this layer will be returned.
     * @returns An array containing all entities corresponding to search criteria.
     */
    function GetEntitiesByClass(clazz: string, layer?: number): Array<Entity>;

    /**
     * Retrieves the gamemode currently in use by the match.
     * @returns The gamemode table.
     */
    function GetGamemode(): object;

    /**
     * Retrieves the current match tick.
     * @returns The current match tick.
     */
    function GetLocalTick(): number;

    /**
     * Retrieves the current time of the match in milliseconds.
     * @returns The current time of the match in milliseconds.
     */
    function GetMilliseconds(): number;

    /**
     * Retrieves the players currently playing in the match.
     * @returns An array containing the players in the match.
     */
    function GetPlayers(): Array<Player>;

    /**
     * Retrieves the current time of the match in seconds.
     * @returns The current time of the match in seconds.
     */
    function GetSeconds(): number;

    /**
     * Retrieves the current network match tick.
     * @returns The current match tick.
     */
    function GetTick(): number;

    /**
     * Retrieves the duration of a tick in seconds.
     * @returns The duration of a tick in seconds.
     */
    function GetTickDuration(): number;

    interface CreateEntityParameters {
        /**
         * The entity class full name (e.g. "entity_box")
         */
        Type: string;

        /**
         * The layer where the entity should be created.
         */
        LayerIndex: number;

        /**
         * The position to spawn the entity.
         */
        Position?: vec2;

        /**
         * The rotation the entity should have (in degrees).
         */
        Rotation?: number;

        /**
         * The scale the entity should have.
         */
        Scale?: number;

        /**
         * An object giving a value for every property of the entity class (some of which may be mandatory).
         */
        Properties?: unknown;

        /**
         * `[Server only]`
         *
         * A reference to the player owning this entity (which will be credited for damage dealt by this entity).
         */
        Owner?: Player;
    }

    interface CreateWeaponParameters {
        /**
         * The entity class full name (e.g. "weapon_sword")
         */
        Type: string;

        /**
         * A reference to the entity which will own this weapon.
         */
        Owner: Entity;

        /**
         * An object giving a value for every property of the weapon class (some of which may be mandatory).
         */
        Properties: unknown;
    }
}
