


type DiscriminateUnionByName<Name extends string, Properties extends Property<string>> = Properties extends { Name: Name } & infer U ? U : never ;

declare interface Entity<Properties extends Property<string> = any> extends Element {
    GetProperty<Name extends Properties["Name"]>(name: Name): DiscriminateUnionByName<Name, Properties>["Default"];
    SetProperty<Name extends Properties["Name"]>(name: Name, value: DiscriminateUnionByName<Name, Properties>["Default"]): void;
}

interface ScriptedEntityParams<Name extends string> {
    IsNetworked: boolean;
    MaxHealth: number;
    Properties: Array<Property<Name>>;
}
