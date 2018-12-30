import Model from './Model';
import { AnyProperty, IdProperty } from './Properties';

class CardModel extends Model {

    public title: AnyProperty;
    public blurb: AnyProperty;
    public link: AnyProperty;
    public image: AnyProperty;
    public tags: IdProperty[];

    constructor(data: object) {
        super(data);
        this.fromData(data);
    }

    public static getStaticName = (): string => 'card';

    protected assignableProperties = (): Map<string, any> => new Map([
        ['title', AnyProperty],
        ['blurb', AnyProperty],
        ['link', AnyProperty],
        ['image', AnyProperty],
        ['tags', IdProperty],
    ])

}

export default CardModel;
