import Model from "../Model";
import { Property } from '../Properties';

class ActorModel extends Model {

    public login: string;

    public displayLogin: string;

    public gravatarId: string;

    public url: string;

    public avatarUrl: string;

    public static modelName: string = 'repo';

    protected convertCase: boolean = true;

    constructor(data: object) {

        super(data);

        this.fromData(data);

    }

    protected assignableProperties = (): Map<string, Function> => new Map([

        ['login', Property],

        ['displayLogin', Property],

        ['gravatarId', Property],

        ['url', Property],

        ['avatarUrl', Property],

    ]);

}

export default ActorModel;
