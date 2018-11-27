import Model from './Model';
import { TagModel, CategoryModel } from '.';
import { Property } from './Properties';

class CardModel extends Model {

    title: string;
    blurb: string;
    link: string;
    image: string;
    categories: CategoryModel[];
    tags: TagModel[];
    content: any[];
    metaTitle: string;
    metaDescription: string;

    protected modelName: string = 'card';

    constructor(data: object) {
        super(data);
        this.fromData(data);
    }

    protected assignableProperties = (): Map<string, any> => new Map([
        ['title', Property],
        ['blurb', Property],
        ['link', Property],
        ['image', Property],
        ['tags', Property],
        ['metaTitle', Property],
        ['metaDescription', Property],
    ]);

}

export default CardModel;
