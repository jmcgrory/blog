import Model from './Model';
import { TagModel } from '.';
import { Property } from './Properties';

class CardModel extends Model {

    title: string;

    blurb: string;

    link: string;

    image: string;

    tags: TagModel[];

    content: any[];

    metaTitle: string;

    metaDescription: string;

    public static type: string = 'card';

    protected assignableProperties = (): Map<string, Function> => new Map([

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
