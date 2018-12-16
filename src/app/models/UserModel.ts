import Model from "./Model";
import { AnyProperty } from './Properties';

class UserModel extends Model {

    public username: AnyProperty;
    public password: AnyProperty;

    constructor(data: object) {
        super(data);
        this.fromData(data);
    }

    public static getStaticName = (): string => 'user';

    protected assignableProperties = (): Map<string, any> => new Map([
        ['username', AnyProperty],
        ['password', AnyProperty],
    ]);

}

export default UserModel;
