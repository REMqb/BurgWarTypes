/**
 * @noSelf
 */
declare namespace packet {
    /**
     * Instantiate a new packet, associated with a particular name (that will serve upon reception).
     * @param name The packet name.
     * @returns An empty packet that can now be used to write data in it.
     */
    function NewPacket(name: string): OutgoingNetworkPacket;

    /**
     * Associate a callback function with a packet name.
     * @param name The packet name.
     * @param handler A function that will be called when a packet of this kind is retrieved, if not provided, diable the handler instead.
     */
    function SetHandler(name: string, handler?: PacketHandlerCallback): void;

    type PacketHandlerCallback = (this: void, packet: unknown) => void;
}
