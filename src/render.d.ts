/**
 * @noSelf
 */
declare namespace render {
    /**
     * `[Client only]`
     *
     * Returns the time taken to draw the previous frame.
     * @returns The number of seconds the last frame rendering took.
     */
    function GetFrameTime(): number;
}
