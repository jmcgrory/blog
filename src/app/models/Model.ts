import { AnyProperty, TimeProperty } from './Properties';
import Property from './Properties/Property';
import { Moment } from 'moment';

abstract class Model {

    /**
     * This is only here because of below Odd err on here w/ Actor/RepoModel
     * 
     * Being called with typeof Property but nowhere is that happening?
     * 
     * @todo Requires fix before any expansion of Property
     */
    public value: any;

    public id: AnyProperty;
    public createdAt: Moment;
    public updatedAt: Moment;
    public deletedAt: Moment;

    protected constructor(data: any) { }

    public static getStaticName = (): string => 'model';

    public getModelName = (): string => {
        // TS requires 'any' type to access constr methods
        const constructor: any = this.constructor;
        return `${constructor.getStaticName()}`;
    }

    public fromData = (data: any, convertCase: boolean = true): this => {
        const properties: Map<string, any> = this.getProperties();
        Object.entries(data).forEach(([key, value]) => {
            const newKey = convertCase ? this.snakeToCamelCase(key) : key;
            if (properties.has(newKey)) {
                const Constructor = properties.get(newKey);
                this[newKey] = new Constructor(value);
            }
        });
        return this;
    }

    protected snakeToCamelCase = (string: string): string => {
        const indexOfUnderscore = string.indexOf('_');
        if (indexOfUnderscore === -1) {
            return string;
        }
        const characterArray = string.split('_').filter((char) => char.length);
        return characterArray.reduce((prev, current, i) => {
            if (!current) {
                return prev + current;
            }
            const appendage = (i > 0) ? `${current[0].toUpperCase()}${current.substring(1)}` : current;
            return `${prev}${appendage}`;
        });
    }

    protected defaultProperties = (): Map<string, any> => new Map([
        ['id', AnyProperty],
        ['createdAt', TimeProperty],
        ['updatedAt', TimeProperty],
        ['deletedAt', TimeProperty],
    ])

    protected assignableProperties = (): Map<string, Property> => new Map();

    protected getProperties = (): Map<string, Property> => new Map([
        ...this.defaultProperties(),
        ...this.assignableProperties(),
    ])

    /**
     * @todo Can be reduce
     */
    public toObject = (): object => {
        const object = {};
        [...this.getProperties().keys()].forEach(
            (key) => {
                const propertyValue = this[key];
                // TODO: Remove
                // if (propertyValue instanceof Model) {
                //     object[key] = propertyValue.id;
                // } else
                if (propertyValue instanceof Property) {
                    object[key] = propertyValue.value;
                }
            }
        );
        return object;
    }
}

export default Model;
