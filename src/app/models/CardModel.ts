import Model from './Model';
import { TagModel } from '.';
import { Moment } from 'moment';
import { Property } from './Properties';


class CardModel extends Model {

    title: string;

    text: string;

    link: string;

    image: string;

    tags: TagModel[];

    public static type: string = 'card';

    protected assignableProperties = (): Map<string, any> => new Map([

        ['title', Property],

        ['text', Property],

        ['link', Property],

        ['image', Property],

        ['tags', Property],

    ]);

}

export default CardModel;
