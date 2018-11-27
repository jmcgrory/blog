import Model from './Model';
import { Property } from './Properties';

class PageModel extends Model {

    title: string;
    content: any[];
    image: string;
    metaTitle: string;
    metaDescription: string;
    protected modelName: string = 'page';

    constructor(data: object) {
        super(data);
        this.fromData(data);
    }

    protected assignableProperties = (): Map<string, any> => new Map([
        ['title', Property],
        ['image', Property],
        ['content', Property],
        ['metaTitle', Property],
        ['metaDescription', Property],
    ]);

}

export default PageModel;
