import { AnyProperty, TimeProperty } from './Properties';
import Property from './Properties/Property';
import { Moment } from 'moment';

abstract class Model {

    public id: AnyProperty;
    public createdAt: Moment;
    public updatedAt: Moment;
    public deletedAt: Moment;

    /**
     * Base Model Constructor
     * @todo should call fromData etc. here...
     */
    protected constructor(data: any) {}

    public static getStaticName = (): string => 'model';



    public getModelName = (): string => {
        // TS requires 'any' type to access constructor methods
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
        const charArray = string.split('_').filter((char) => char.length);
        return charArray.reduce((prev, current, i) => {
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

    public toObject = (): object => {
        return [...this.getProperties().keys()].reduce(
            (previous, next) => {
                const value = this[next];
                if (!value) {
                    return previous;
                }
                const string = value.toString();
                return string !== null ? { ...previous, [next]: string } : previous;
            }, {}
        );
    }

    public toString = (): string => {
        return JSON.stringify(this.toObject());
    }
}

export default Model;
