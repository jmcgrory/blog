import { Property, TimeProperty } from './Properties';
import { Moment } from 'moment';

abstract class Model {

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

            console.log(newKey);

            if (properties.has(newKey)) {

                console.log('EXISTS IN MODEL!');

                const Property = properties.get(newKey);

                this[newKey] = new Property(value);

            }

        });

        return this;

    };

    protected snakeToCamelCase = (string: string): string => {

        if (!string.includes('_')) return string;

        return string.split('_').reduce((prev, current, i) => {

            const appendage = (i > 0) ? `${current[0].toUpperCase()}${current.substring(1)}` : current;

            console.log('SNAKED', `${prev}${appendage}`);

            return `${prev}${appendage}`;

        });



    }

    protected defaultProperties = (): Map<string, Function> => new Map([

        ['id', Property],

        ['createdAt', TimeProperty],

        ['updatedAt', TimeProperty],

        ['deletedAt', TimeProperty],

    ]);

    protected assignableProperties = (): Map<string, Function> => new Map();

    protected getProperties = (): Map<string, any> => new Map([

        ...this.defaultProperties(),

        ...this.assignableProperties(),

    ]);



}

export default Model;
