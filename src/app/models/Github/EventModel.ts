import Model from "../Model";
import { AnyProperty } from '../Properties';
import ActorModel from './ActorModel';
import RepoModel from './RepoModel';
// const changeCase = require('change-case')
import * as changeCase from 'change-case';

class EventModel extends Model {

    public type: AnyProperty;
    public actor: ActorModel;
    public repo: RepoModel;
    public payload: AnyProperty;

    constructor(data: object) {
        super(data);
        this.fromData(data, true);
    }

    public static getStaticName = (): string => 'event';

    /**
     * @todo despite what the IDE says, this is used within templates
     */
    public getType = (): string => {
        return changeCase.title(this.type.value);
    }

    protected assignableProperties = (): Map<string, any> => {
        const map = new Map([
            ['type', AnyProperty],
            ['payload', AnyProperty],
        ]);
        map.set('actor', ActorModel);
        map.set('repo', RepoModel);
        return map;
    }
}

export default EventModel;
