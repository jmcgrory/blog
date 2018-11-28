import Model from './Model';
import { TagModel, CategoryModel } from '.';
import { Property } from './Properties';

class ArticleModel extends Model {

    title: string;
    blurb: string;
    link: string;
    image: string;
    categories: CategoryModel[];
    tags: TagModel[];
    content: any[];
    metaTitle: string;
    metaDescription: string;

    constructor(data: object) {
        super(data);
        this.fromData(data);
    }

    public static getStaticName = (): string => 'article';

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

export default ArticleModel;
