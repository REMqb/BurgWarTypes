/**
 * Possible property types, should match https://github.com/DigitalPulseSoftware/BurgWar/blob/master/include/CoreLib/PropertyTypeList.hpp and
 * https://github.com/DigitalPulseSoftware/BurgWar/blob/master/scripts/autorun/libs/enums.lua
 */
declare enum PropertyType {
    Boolean = 0,
    Entity = 1,
    Float = 2,
    FloatPosition = 3,
    FloatPosition3D = 4,
    FloatRect = 5,
    FloatSize = 6,
    FloatSize3D = 7,
    Integer = 8,
    IntegerPosition = 9,
    IntegerPosition3D = 10,
    IntegerRect = 11,
    IntegerSize = 12,
    IntegerSize3D = 13,
    Layer = 14,
    String = 15,
    Texture = 16,
}

/**
 * Type / lua type / default value type association
 */
type TypedPropperty = {
    Type: PropertyType.Boolean,
    Default: boolean
} | {
    Type: PropertyType.Entity,
    Default: Entity
} | {
    Type: PropertyType.Float,
    Default: number
} | {
    Type: PropertyType.FloatPosition,
    Default: vec2
} | {
    Type: PropertyType.FloatPosition3D,
    Default: vec3
} | {
    Type: PropertyType.FloatRect,
    Default: rect
} | {
    Type: PropertyType.FloatSize,
    Default: vec2
} | {
    Type: PropertyType.FloatSize3D,
    Default: vec3
} | {
    Type: PropertyType.Integer,
    Default: number
} | {
    Type: PropertyType.IntegerPosition,
    Default: vec2
} | {
    Type: PropertyType.IntegerPosition3D,
    Default: vec3
} | {
    Type: PropertyType.IntegerRect,
    Default: rect
} | {
    Type: PropertyType.IntegerSize,
    Default: vec2
} | {
    Type: PropertyType.IntegerSize3D,
    Default: vec3
} | {
    Type: PropertyType.Layer,
    Default: number
} | {
    Type: PropertyType.String,
    Default: string
} | {
    Type: PropertyType.Texture,
    Default: Texture
};

type Property<Name extends string> = {
    Name: Name;
    Shared: boolean;
} & TypedPropperty;
