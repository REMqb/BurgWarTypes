
declare type Entity<Properties extends Property<string> = any, Structure = unknown> = Element<Properties, Structure> & {

}

declare type EntityTemplate<EntityT extends Entity> = ElementTemplate<EntityT> & {
    Instance(element: Element): element is EntityT;

    /*
        Sync
    */

    /**
     * Register a callback for the `InputUpdate` event
     * @param callback callback to call
     */
    On(event: "InputUpdate", callback: EntityTemplate.InputUpdateCallback<EntityT>): void;

    /*
        Async
    */

    /**
     * Register an callback for the `InputUpdate` event
     * @param callback callback to call
     */
    OnAsync(event: "InputUpdate", callback: EntityTemplate.InputUpdateCallback<EntityT>): void;
}

declare namespace EntityTemplate {
    type InputUpdateCallback<EntityT extends Entity> = (self: EntityT) => void;
}
