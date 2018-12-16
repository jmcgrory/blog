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

    constructor(data: any) { }

    public static getStaticName = (): string => 'model';

    public getModelName = (): string => {
        // TS requires 'any' type to access constr methods
        const constructor: any = this.constructor;
        return `${constructor.getStaticName()}`;
    }

    public fromData = (data: any, convertCase: boolean = false): this => {
        const properties: Map<string, any> = this.getProperties();
        Object.entries(data).forEach(([key, value]) => {
            const newKey = convertCase ? this.snakeToCamelCase(key) : key;
            if (properties.has(newKey)) {
                const Constructor = properties.get(newKey);
                this[newKey] = new Constructor(value);
            }
        });
        return this;
    };

    protected snakeToCamelCase = (string: string): string => {
        if (!string.includes('_')) return string;
        return string.split('_').reduce((prev, current, i) => {
            const appendage = (i > 0) ? `${current[0].toUpperCase()}${current.substring(1)}` : current;
            return `${prev}${appendage}`;
        });

    }

    protected defaultProperties = (): Map<string, any> => new Map([
        ['id', AnyProperty],
        ['createdAt', TimeProperty],
        ['updatedAt', TimeProperty],
        ['deletedAt', TimeProperty],
    ]);

    protected assignableProperties = (): Map<string, any> => new Map();

    protected getProperties = (): Map<string, any> => new Map([
        ...this.defaultProperties(),
        ...this.assignableProperties(),
    ]);

    public toObject = (): object => {
        let object = {};
        [...this.getProperties().keys()].forEach(
            (key) => {
                const propertyValue = this[key];
                if (propertyValue instanceof Model) {
                    object[key] = propertyValue.id;
                } else if (propertyValue instanceof Property) {
                    object[key] = propertyValue.value;
                }
            }
        );
        return object;
    }

}

export default Model;
