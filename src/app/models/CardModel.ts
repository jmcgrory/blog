import Model from './Model';
import { TagModel } from '.';
import { Property } from './Properties';


class CardModel extends Model {

    title: string;

    blurb: string;

    link: string;

    image: string;

    tags: TagModel[];

    public static type: string = 'card';

    protected assignableProperties = (): Map<string, any> => new Map([

        ['title', Property],

        ['blurb', Property],

        ['link', Property],

        ['image', Property],

        ['tags', Property],

    ]);

}

export default CardModel;
