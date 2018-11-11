import { Property, TimeProperty } from './Properties';
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

    public id: number;

    public createdAt: Moment;

    public updatedAt: Moment;

    public deletedAt: Moment;

    public static modelName: string;

    constructor(data: any) {

        this.fromData(data);

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

        ['id', Property],

        ['createdAt', TimeProperty],

        ['updatedAt', TimeProperty],

        ['deletedAt', TimeProperty],

    ]);

    protected assignableProperties = (): Map<string, any> => new Map();

    protected getProperties = (): Map<string, any> => new Map([

        ...this.defaultProperties(),

        ...this.assignableProperties(),

    ]);



}

export default Model;
