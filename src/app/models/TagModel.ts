import Model from './Model';
import { Property } from './Properties';

class TagModel extends Model {

    name: string;
    description: string;
    icon: string;

    constructor(data: object) {
        super(data);
        this.fromData(data);
    }

    public static getStaticName = (): string => 'tag';

    protected assignableProperties = (): Map<string, any> => new Map([
        ['name', Property],
        ['description', Property],
        ['icon', Property],
    ]);

}

export default TagModel;
