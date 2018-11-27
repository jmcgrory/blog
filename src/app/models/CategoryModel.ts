import Model from './Model';
import { TagModel } from '.';
import { Property } from './Properties';

class CategoryModel extends Model {

    public name: string;
    public description: string;
    protected modelName: string = 'category';

    constructor(data: object) {
        super(data);
        this.fromData(data);
    }

    protected assignableProperties = (): Map<string, any> => new Map([
        ['name', Property],
        ['description', Property],
    ]);

}

export default CategoryModel;
