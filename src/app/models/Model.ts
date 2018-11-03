abstract class Model {

    public id: number;

    public static type: string;

    constructor(data: any) {

        this.fromData(data);

    }

    public fromData = (data: any): this => {

        const properties: string[] = this.getProperties();

        Object.entries(data).forEach(([key, value]) => {

            if (properties.includes(key)) {

                this[key] = value;

            }

        });

        return this;

    };

    protected defaultProperties = (): string[] => [

        'id',

    ];

    protected assignableProperties = (): string[] => [];

    protected getProperties = (): string[] => [

        ...this.defaultProperties(),

        ...this.assignableProperties(),

    ];



}

export default Model;
