import Model from "../Model";
import { Property } from '../Properties';

class ActorModel extends Model {

    public displayLogin: string;

    public gravatarId: string;

    public url: string;

    public avatarUrl: string;

    public static modelName: string = 'actor';

    constructor(data: object) {

        super(data);

        this.fromData(data, true);

        return this;

    }

    protected assignableProperties = (): Map<string, any> => new Map([

        ['displayLogin', Property],

        ['url', Property],

        ['avatarUrl', Property],

    ]);

}

export default ActorModel;
