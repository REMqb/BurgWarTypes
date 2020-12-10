declare interface Scoreboard {
    AddColumn(): unknown;
    AddTeam(): unknown;
    RegisterPlayer(player: Player): unknown;
    UnregisterPlayer(player: Player): unknown;
    UpdatePlayerValue(): unknown;
}
