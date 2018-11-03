import Model from './Model';
import { Property } from './Properties';

class NoticeModel extends Model {

    title: string;

    description: string;

    code: number;

    actions: any[]; // ButtonModel?

    category: 'error' | 'information' | 'success';

    public static type: string = 'notice';

    protected assignableProperties = (): Map<string, any> => new Map([

        ['title', Property],

        ['description', Property],

        ['code', Property],

        ['actions', Property],

        ['category', Property],

    ]);

    /** @todo */
    public dismiss = (): void => { }

}

export default NoticeModel;
