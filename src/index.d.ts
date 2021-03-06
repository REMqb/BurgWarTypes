/// <reference types="lua-types/5.3" />

import './classes';

import './assets';
import './match';
import './packet';
import './particle';
import './physics';
import './render';
import './scripts';
import './sound';
import './timer';

/**
 * @noSelf
 */
declare global {
    /**
     * True if we are on the client side.
     */
    const CLIENT: boolean;
    /**
     * True if we are on the server side.
     */
    const SERVER: boolean;
    /**
     * True if we are on the editor.
     */
    const EDITOR: boolean;

    /**
     * Prints its parameter to the execution output in a pretty way.
     *
     * This function does the same as print but is able to pretty-print tables.
     * @param args Variadic parameters to print.
     *
     * Remarks:
     * 1) All parameters are converted to string as if tostring (with the second parameter set to true) was called on them before passing them to this function.
     * 2) When called with more than one argument, each printed argument will be separated by a tabulation (\t character).
     */
    function pprint(...args: any): void;

    /**
     * Receives a value of any type and converts it to a string in a human-readable format.
     * @param value Value to stringify.
     * @param extended Optional parameter to indicate if this function should print table content.
     * @returns A stringified version of `value`.
     *
     * Remarks:
     * 1) This function is from the Lua standard (see [print](https://www.lua.org/manual/5.4/manual.html#pdf-tostring) in the official Lua manual), although it has been extended with a second parameter (if no value or false is passed as the second parameter this function behaves like the original tostring function).
     * 2) Independently from the second parameter, this function will try to call the __tostring metamethod and then the __name metafield.
     */
    function tostring(value: any, extended?: boolean): string;

    /**
     * Registers an asset that can then be used client-side.
     * When a player joins the server, they will download all assets they don't have, either from FastDL or from the server itself.
     * @param asset Path to the asset (relative to the resource directory).
     *
     * Remarks:
     * 1) All calls to RegisterClientAssets should be done at initialization, before any player joins.
     * 2) Only server-registered assets can be used client-side. If a client script tries to use a non-registered asset it will not be found by the game (independently from the file existence on the dive).
          The server and map editor don't have this restriction.
     * 3) This function exists client-side only for convenience and does nothing when called, as it's commonly called in shared element scripts.
     *
     * Example code:
     * ```ts
     *              // Registers the script client-side
     *              RegisterClientScript():
     *              // Registers box.png as a client-side asset
     *              RegisterClientAssets("box.png");
     *
     *              if (CLIENT) {
     *                  entity.On("init", () => {
     *                      this.AddSprite({
     *                          // Using the asset
     *                          TexturePath = "box.png"
     *                      });
     *                  });
     *              }
     * ```
     */
    function RegisterClientAssets(asset: string): void;

    /**
     * Registers a script file that will be downloaded and used client-side.
     * Calling this function is required for every client script.
     *
     * If no parameter is set, this function registers the script file from where it's called.
     * @param filepath Path to the script (relative to the scripts directory).
     *
     * Remarks:
     * 1) All calls to RegisterClientScript should be done at initialization, before any player joins.
     * 2) Only server-registered scripts can be included client-side. If a client script tries to include a non-registered script file it will not be found by the game (independently of the file existence on the dive).
     * The server and map editor don't have this restriction.
     * 3) This function exists client-side only for convenience and does nothing when called, as it's commonly called in shared element scripts.
     *
     * Example code:
     * ```ts
     *                 // Registers the script client-side
     *                 RegisterClientScript():
     *                 // Registers box.png as a client-side asset
     *                 RegisterClientAssets("box.png");
     *
     *                 if (CLIENT) {
     *                     entity.On("init", () => {
     *                         this.AddSprite({
     *                             // Using the asset
     *                             TexturePath = "box.png"
     *                         });
     *                     });
     *                 }
     * ```
     */
    function RegisterClientScript(filepath?: string): void;

    /**
     * Create a new Entity template
     * @param params properties of the template
     */
    function ScriptedEntity<
        Names extends string,
        S extends object,
        BaseNames extends string,
        BaseS extends object,
        T extends ScriptedEntityParams<Names, S, BaseNames, BaseS>,
        SelfProperties extends Property<Names> = T["Properties"][number],
        Properties extends Property<string> = InferProperties<Names, SelfProperties, BaseNames, T["TsBase"]>,
        SelfStructure extends object = T["TsStructure"] extends object ? T["TsStructure"] : any,
        Structure extends object = InferStructure<SelfStructure, T["TsBase"]>,
    >(params: T): EntityTemplate<Entity<Properties, Structure>>;

    type InferProperties<
        Names extends string,
        SelfP extends Property<Names>,
        BaseNames extends string,
        T extends EntityTemplate<Entity<Property<BaseNames>, any>> | undefined
    > = T extends EntityTemplate<Entity<infer BaseP, infer U>> ? BaseP | SelfP : SelfP;

    type InferStructure<
        SelfStructure extends object,
        T extends EntityTemplate<Entity<any, any>> | undefined
    > = T extends EntityTemplate<Entity<infer P, infer BaseStructure>> ? BaseStructure & SelfStructure : SelfStructure;

    interface ScriptedEntityParams<
        Names extends string = string,
        Structure extends object = any,
        BaseNames extends string = string,
        BaseStructure extends object = any
    > {
        /**
         * Dummy parameter that allow to type properties on self in callbacks, if not used you can
         * Use any name but the type will always be any, if you want to allow any properties while typing some,
         * add a `[key: sting]: any;` declaration to your type
         */
        TsStructure?: Structure,
        TsBase?: EntityTemplate<Entity<Property<BaseNames>, BaseStructure>>,
        Base?: string,
        IsNetworked: boolean;
        MaxHealth: number;
        /**
         * List of the properties of the template
         */
        Properties: Array<Property<Names>>;
    }

    /**
     * Helper fake function that allow taging an interface literal with a structure type, it won't exists in the resulting lua file
     *
     * Example code:
     * ```ts
     * cont foo = {
     *    TsStructure: TsStructure<{baz: boolean}>(),
     *    bar: 42
     * };
     * ```
     */
    function TsStructure<T>(): T;
    /**
     * Helper fake function that allow taging an interface literal with a base type, it won't exists in the resulting lua file
     *
     * Example code:
     * ```ts
     * cont foo = {
     *    TsBase: TsBase<BaseType>(),
     *    bar: 42
     * };
     * ```
     */
    function TsBase<T>(): T;

}
