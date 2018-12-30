import Model from './Model';
import { TagModel, CategoryModel } from '.';
import { AnyProperty, HtmlProperty } from './Properties';
import IdProperty from './Properties/IdProperty';

class ArticleModel extends Model {

    title: AnyProperty;
    blurb: AnyProperty;
    slug: AnyProperty;
    image: AnyProperty;
    categories: IdProperty;
    tags: IdProperty;
    content: HtmlProperty;
    metaTitle: AnyProperty;
    metaDescription: AnyProperty;

    constructor(data: object) {
        super(data);
        this.fromData(data);
    }

    public static getStaticName = (): string => 'article';

    protected assignableProperties = (): Map<string, any> => new Map([
        ['title', AnyProperty],
        ['blurb', AnyProperty],
        ['slug', AnyProperty],
        ['image', AnyProperty],
        ['tags', IdProperty],
        ['categories', IdProperty],
        ['content', HtmlProperty],
        ['metaTitle', AnyProperty],
        ['metaDescription', AnyProperty],
    ])

}

export default ArticleModel;
