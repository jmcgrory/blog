import Model from "../Model";
import { Property } from '../Properties';

class RepoModel extends Model {

    public name: string;

    public url: string;

    public static type: string = 'repo';

    protected assignableProperties = (): Map<string, any> => new Map([

        ['name', Property],

        ['url', Property],

    ]);

}

export default RepoModel;
