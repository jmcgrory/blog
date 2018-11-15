import Model from "../Model";
import { Property } from '../Properties';

class RepoModel extends Model {

    public name: Property;

    public url: Property;

    public static modelName: string = 'repo';

    constructor(data: object) {

        super(data);

        this.fromData(data, true);

    }

    protected assignableProperties = (): Map<string, any> => new Map([

        ['name', Property],

        ['url', Property],

    ]);

}

export default RepoModel;
