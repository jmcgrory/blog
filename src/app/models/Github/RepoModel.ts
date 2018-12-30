import Model from '../Model';
import { AnyProperty } from '../Properties';

class RepoModel extends Model {

    public name: AnyProperty;
    public url: AnyProperty;

    constructor(data: object) {
        super(data);
        this.fromData(data, true);
    }

    public static getStaticName = (): string => 'repo';

    protected assignableProperties = (): Map<string, any> => new Map([
        ['name', AnyProperty],
        ['url', AnyProperty],
    ])

    /** @deprecated */
    public setDefault = (): void => {
        console.warn('This is here to appease the TSLIB gods.');
    }

}

export default RepoModel;
