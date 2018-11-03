import Model from './Model';
import TagModel from './TagModel';
import { Moment } from 'moment';

class CardModel extends Model {

    title: string;

    date: Moment;

    text: string;

    link: string;

    image: string;

    tags: TagModel[];

    public static type: string = 'card';

    constructor(data: any) {

        super(data);

    }

}

export default CardModel;
