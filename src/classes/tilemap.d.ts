declare interface Tilemap {
    GetMapSize(): vec2;
    GetSize(): vec2;
    GetTileSize(): vec2;
    Hide(): unknown;
    IsValid(): boolean;
    IsVisible(): boolean;
    SetOffset(): unknown;
    SetRotation(): unknown;
    SetTileColor(): unknown;
    Show(): unknown;
}
