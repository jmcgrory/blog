import Model from "../Model";
import { Property } from '../Properties';

class ActorModel extends Model {

    public name: string;

    public url: string;

    public static type: string = 'actor';

    protected convertCase: boolean = true;

    protected assignableProperties = (): Map<string, Function> => new Map([

        ['name', Property],

        ['url', Property],

    ]);

}

export default ActorModel;
