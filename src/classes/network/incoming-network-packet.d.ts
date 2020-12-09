declare interface IncomingNetworkPacket {
    ReadCompressedInteger(): number;
    ReadCompressedUnsigned(): number;
    ReadDouble(): number;
    ReadEntity(): unknown;
    ReadSingle(): unknown;
    ReadString(): string;
    ReadVector2(): vec2;
}
