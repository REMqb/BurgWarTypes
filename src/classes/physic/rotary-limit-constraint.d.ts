declare interface RotaryLimitConstraint extends Constraint {
    GetMaxAngle(): number;
    GetMinAngle(): number;
    SetMaxAngle(angle: number): void;
    SetMinAngle(angle: number): void;
}
