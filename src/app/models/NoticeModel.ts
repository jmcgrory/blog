import Model from './Model';

class NoticeModel extends Model {

    title: string;

    description: string;

    code: number;

    actions: any[]; // ButtonModel?

    category: 'error' | 'information' | 'success';

    public static type: string = 'notice';

    /** @todo */
    public dismiss = (): void => { }

}

export default NoticeModel;
