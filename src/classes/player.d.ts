declare interface Player {
    GetControlledEntity(): Entity;
    GetLayerIndex(): number;
    GetPlayerIndex(): number;
    GetName(): string;
    GetPing(): number;
    IsAdmin(): boolean;
    MoveToLayer(layer: number): unknown;
    PrintChatMessage(): unknown;
    SendPacket(): unknown;
    SetAdmin(admin: boolean): unknown;
    UpdateControlledEntity(): unknown;
    UpdateLayerVisiblity(): unknown;
}
