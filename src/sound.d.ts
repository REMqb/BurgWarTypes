/**
 * `[Client only]`
 * @noSelf
 */
declare namespace sound {
    /**
     * `[Client only]`
     *
     * Opens a music from a file path.
     * @param filePath Path to the image file (relative to the resources directory).
     * @tupleReturn
     * @returns `music`:  Music object opened from the file path or null if the opening failed.
     * @returns `err`: If music is null, an error message containing the reason this function failed.
     *
     * Remarks:
     * 1) This function will fail if the music file has not been registered server-side using RegisterClientAssets, independently from the file existence on the host filesystem.
     * 2) Contrary to functions like {@link assets.GetTexture}, this function will always instantiate a new {@link Music} every call, even if another one already exists.
     * 3) Only the following extensions are supported:
     *   - aiff
     *   - aiffau
     *   - aiffavr
     *   - aiffcaf
     *   - aiffflac
     *   - aiffhtk
     *   - aiffircam
     *   - aiffmat4
     *   - aiffmat5
     *   - aiffmpc2k
     *   - aiffnist
     *   - aiffogg
     *   - aiffpvf
     *   - aiffraw
     *   - aiffrf64
     *   - aiffsd2
     *   - aiffsds
     *   - aiffsvx
     *   - aiffvoc
     *   - aiffw64
     *   - aiffwav
     *   - aiffwve
     */
    function CreateMusicFromFile(filePath: string): [music: Music, err: null] | [music: null, err: string];
}
