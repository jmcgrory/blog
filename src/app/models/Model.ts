import { Property, TimeProperty } from './Properties';
import { Moment } from 'moment';

abstract class Model {

    public id: number;

    public createdAt: Moment;

    public updatedAt: Moment;

    public deletedAt: Moment;

    protected convertCase: boolean = false;

    public static type: string;

    constructor(data: any) {

        this.fromData(data);

    }

    public fromData = (data: any): this => {

        const properties: Map<string, any> = this.getProperties();

        Object.entries(data).forEach(([key, value]) => {

            if (properties.has(key)) {

                const Property = properties.get(key);

                this[key] = new Property(value);

            }

        });

        return this;

    };

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
