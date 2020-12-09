
/**
 * @noSelf
 */
declare namespace assets {
    /**
     * Retrieves an handle to a texture file, loading it if necessary. If the texture file cannot be loaded for some reason, this function returns nil.
     *
     * @param filePath Path to the image file (relative to the resources directory).
     * @returns The corresponding texture object or null if the texture couldn't be loaded.
     *
     * Remarks:
     * 1) If the texture is not already loaded, it will be loaded during this call (which may take some time)
     * 2) `[Client side]` This function will fail if the image file has not been registered server-side using RegisterClientAssets, independently from the file existence on the host filesystem.
     * 3) Only the following extensions are supported:
     *   - bmp
     *   - dds
     *   - gif
     *   - hdr
     *   - jpg / jpeg
     *   - pcx
     *   - pic
     *   - png
     *   - ppm
     *   - pgm
     *   - psd
     *   - tga
     *
     * Example:
     *  ```ts
     *          const texture = assets.GetTexture("texture.png");
     *          if (texture) {
     *              print("Texture size", texture.GetSize());
     *          } else {
     *              print("Texture couldn't be loaded");
     *          }
     *  ```
     */
    function GetTexture(filePath: string): Texture | null;
}
