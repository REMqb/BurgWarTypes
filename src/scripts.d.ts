/**
 * @noSelf
 */
declare namespace render {
    /**
     * Reload all scripts, entities, weapons, gamemode, etc. from the filesystem.
     *
     * Remarks:
     * 1) Although this function exists client-side, calling it will trigger an error.
     */
    function ReloadAll(): void;
}
