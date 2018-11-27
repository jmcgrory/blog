import Model from "../Model";
import { Property } from '../Properties';
import ActorModel from './ActorModel';
import RepoModel from './RepoModel';
// const changeCase = require('change-case')
import * as changeCase from 'change-case';

class EventModel extends Model {

    public type: Property;

    public actor: ActorModel;

    public repo: RepoModel;

    public payload: Property;

    protected modelName: string = 'event';

    constructor(data: object) {

        super(data);

        this.fromData(data, true);

    }

    public getType = (): string => {

        return changeCase.title(this.type.value);

    }

    protected assignableProperties = (): Map<string, any> => new Map([

        ['type', Property],

        ['actor', ActorModel],

        ['repo', RepoModel],

        ['payload', Property],

    ]);

}

export default EventModel;
