/**
 * All types that relation can be.
 */
export type RelationType = "one-to-one"|"one-to-many"|"many-to-one"|"many-to-many";

/**
 * Function that returns a type of the field. Returned value must be a class used on the relation.
 */
export type RelationTypeInFunction = ((type?: any) => Function);

/**
 * Contains the name of the property of the object, or the function that returns this name.
 */
export type PropertyTypeInFunction<T> = string|((t: T) => string|any);

/**
 * Provides a constants for each relation type.
 */
export class RelationTypes {
    static ONE_TO_ONE: RelationType = "one-to-one";
    static ONE_TO_MANY: RelationType = "one-to-many";
    static MANY_TO_ONE: RelationType = "many-to-one";
    static MANY_TO_MANY: RelationType = "many-to-many";
}
