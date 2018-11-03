import Model from './Model';
import { Property } from './Properties';

class TagModel extends Model {

    name: string;

    description: string;

    icon: string;

    public static type: string = 'tag';

    protected defaultProperties = (): Map<string, any> => new Map([

        ['name', Property],

        ['description', Property],

        ['icon', Property],

    ]);

}

export default TagModel;
