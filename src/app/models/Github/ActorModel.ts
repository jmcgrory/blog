import Model from "../Model";
import { AnyProperty } from '../Properties';

class ActorModel extends Model {

    public displayLogin: AnyProperty;
    public url: AnyProperty;
    public avatarUrl: AnyProperty;

    constructor(data: object) {
        super(data);
        this.fromData(data, true);
    }

    public static getStaticName = (): string => 'actor';

    protected assignableProperties = (): Map<string, any> => new Map([
        ['displayLogin', AnyProperty],
        ['url', AnyProperty],
        ['avatarUrl', AnyProperty],
    ])

    /** @deprecated */
    public setDefault = (): void => {
        console.warn('This is here to appease the TSLIB gods.');
    }

}

export default ActorModel;
