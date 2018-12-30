import Model from './Model';
import { AnyProperty, HtmlProperty } from './Properties';

class PageModel extends Model {

    title: AnyProperty;
    content: HtmlProperty;
    image: AnyProperty;
    metaTitle: AnyProperty;
    metaDescription: AnyProperty;

    constructor(data: object) {
        super(data);
        this.fromData(data);
    }

    public static getStaticName = (): string => 'page';

    protected assignableProperties = (): Map<string, any> => new Map([
        ['title', AnyProperty],
        ['image', AnyProperty],
        ['content', HtmlProperty],
        ['metaTitle', AnyProperty],
        ['metaDescription', AnyProperty],
    ])

}

export default PageModel;
