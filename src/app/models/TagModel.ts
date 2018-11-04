import Model from './Model';
import { Property } from './Properties';

class TagModel extends Model {

    name: string;

    description: string;

    icon: string;

    public static modelName: string = 'tag';

    constructor(data: object) {

        super(data);

        this.fromData(data);

    }

    protected defaultProperties = (): Map<string, any> => new Map([

        ['name', Property],

        ['description', Property],

        ['icon', Property],

    ]);

}

export default TagModel;
