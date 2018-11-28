import Model from "../Model";
import { Property } from '../Properties';

class ActorModel extends Model {

    public displayLogin: Property;
    public url: Property;
    public avatarUrl: Property;

    constructor(data: object) {
        super(data);
        this.fromData(data, true);
    }

    public static getStaticName = (): string => 'actor';

    protected assignableProperties = (): Map<string, any> => new Map([
        ['displayLogin', Property],
        ['url', Property],
        ['avatarUrl', Property],
    ]);

}

export default ActorModel;
