import Model from './Model';

class TagModel extends Model {

    name: string;

    description: string;

    icon: string;

    public static type: string = 'tag';

}

export default TagModel;
