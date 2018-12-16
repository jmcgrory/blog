import Model from './Model';
import { TagModel } from '.';
import { AnyProperty } from './Properties';

class CategoryModel extends Model {

    public name: string;
    public description: string;

    constructor(data: object) {
        super(data);
        this.fromData(data);
    }

    public static getStaticName = (): string => 'category';

    protected assignableProperties = (): Map<string, any> => new Map([
        ['name', AnyProperty],
        ['description', AnyProperty],
    ]);

}

export default CategoryModel;
