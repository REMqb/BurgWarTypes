declare interface OutgoingNetworkPacket {
    WriteCompressedInteger(value: number): void;
    WriteCompressedUnsigned(value: number): void;
    WriteDouble(value: number): void;
    WriteEntity(entity: unknown): void;
    WriteSingle(single: unknown): void;
    WriteString(str: string): void;
    WriteVector2(vector: vec2): void;
}
