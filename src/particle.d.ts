


/**
 * `[Client only]`
 *
 * @noSelf
 */
declare namespace particle {
    /**
     * `[Client only]`
     *
     * Creates a new particle group.
     *
     * Allowed particle types:
     * - billboard2d: Regular particles that always face the camera.
     *
     * @param maxParticleCount A maximum count of particles that will be handled by this group.
     * @param particleType
     * @returns The newly created ParticleGroup.
     */
    function CreateGroup(maxParticleCount: number, particleType: ParticleType): ParticleGroup;

    type ParticleType = "billboard2d";
}
