import Model from './Model';
import { TagModel } from '.';
import { Property } from './Properties';

class CardModel extends Model {

    public title: string;

    public blurb: string;

    public link: string;

    public image: string;

    public tags: TagModel[];

    public static type: string = 'card';

    protected assignableProperties = (): Map<string, Function> => new Map([

        ['title', Property],

        ['blurb', Property],

        ['link', Property],

        ['image', Property],

        ['tags', Property],

    ]);

}

export default CardModel;
