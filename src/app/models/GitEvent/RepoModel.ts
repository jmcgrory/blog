import Model from "../Model";
import { Property } from '../Properties';

class ActorModel extends Model {

    public login: string;

    public displayLogin: string;

    public gravatarId: string;

    public url: string;

    public avatarUrl: string;

    public static type: string = 'gitActor';

    protected assignableProperties = (): Map<string, any> => new Map([

        ['login', Property],

        ['displayLogin', Property],

        ['gravatarId', Property],

        ['url', Property],

        ['avatarUrl', Property],

    ]);

}

export default ActorModel;
