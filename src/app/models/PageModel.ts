import Model from './Model';
import { Property } from './Properties';

class PageModel extends Model {

    title: string;

    content: any[];

    image: string;

    metaTitle: string;

    metaDescription: string;

    public static type: string = 'page';

    protected assignableProperties = (): Map<string, Function> => new Map([

        ['title', Property],

        ['image', Property],

        ['content', Property],

        ['metaTitle', Property],

        ['metaDescription', Property],

    ]);

}

export default PageModel;
