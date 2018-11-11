import Model from "../Model";
import { Property } from '../Properties';
import ActorModel from './ActorModel';
import RepoModel from './RepoModel';

class EventModel extends Model {

    public type: string;

    public actor: ActorModel;

    public repo: RepoModel;

    public payload: object;

    public static modelName: string = 'event';

    constructor(data: object) {

        super(data);

        this.fromData(data, true);

    }

    protected assignableProperties = (): Map<string, any> => new Map([

        ['type', Property],

        ['actor', ActorModel],

        ['repo', RepoModel],

        ['payload', Property],

    ]);

}

export default EventModel;