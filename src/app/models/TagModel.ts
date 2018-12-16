import Model from './Model';
import { AnyProperty } from './Properties';

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
        ['name', AnyProperty],
        ['description', AnyProperty],
        ['icon', AnyProperty],
    ]);

}

export default TagModel;
