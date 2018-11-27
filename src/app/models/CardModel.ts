import Model from './Model';
import { TagModel } from '.';
import { Property } from './Properties';

class CardModel extends Model {

    public title: string;
    public blurb: string;
    public link: string;
    public image: string;
    public tags: TagModel[];
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
        ['tags', TagModel],
    ]);

}

export default CardModel;
