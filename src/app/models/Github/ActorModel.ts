import Model from "../Model";
import { Property } from '../Properties';

class ActorModel extends Model {

    public displayLogin: Property;

    public url: Property;

    public avatarUrl: Property;

    public static modelName: string = 'actor';

    constructor(data: object) {

        super(data);

        this.fromData(data, true);

    }

    protected assignableProperties = (): Map<string, any> => new Map([

        ['displayLogin', Property],

        ['url', Property],

        ['avatarUrl', Property],

    ]);

}

export default ActorModel;
