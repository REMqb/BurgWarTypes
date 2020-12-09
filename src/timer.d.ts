/**
 * @noSelf
 */
declare namespace timer {
    /**
     * Sets a timer which executes a function once the timer expires.
     * @param time Time in milliseconds before triggering callback.
     * @param callback Callback to be called.
     *
     * Remarks:
     * 1) The callback function will be triggered in the main Lua thread and not in a coroutine.
     * 2) The time resolution depends on the match tickrate, as the callback will only get called in the tick following the timer expiration.
     */
    function Create(time: number, callback: TimerCallback): void;

    /**
     * Pauses the calling coroutine for a specific duration.
     * @param time Time in milliseconds before resuming.
     *
     * Remarks:
     * 1) The time resolution depends on the match tickrate, as the callback will only get called in the tick following the timer expiration.
     * 2) This function can only be called from within a coroutine.
     */
    function Sleep(time: number): void;

    type TimerCallback = (this: void) => void;
}
