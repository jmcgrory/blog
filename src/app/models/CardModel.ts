import Model from './Model';
import { TagModel } from '.';
import { Property } from './Properties';

class CardModel extends Model {

    public title: string;

    public blurb: string;

    public link: string;

    public image: string;

    public tags: TagModel[];

    public static modelName: string = 'card';

    constructor(data: object) {

        super(data);

        this.fromData(data);

    }

    protected assignableProperties = (): Map<string, Function> => new Map([

        ['title', Property],

        ['blurb', Property],

        ['link', Property],

        ['image', Property],

        ['tags', Property],

    ]);

}

export default CardModel;
