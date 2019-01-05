import Model from '../Model';
import { AnyProperty } from '../Properties';
import ActorModel from './ActorModel';
import RepoModel from './RepoModel';
import * as changeCase from 'change-case';

class EventModel extends Model {

    public type: AnyProperty;
    public actor: ActorModel;
    public repo: RepoModel;
    public payload: AnyProperty;

    constructor(data: object) {
        super(data);
        this.fromData(data, true);
        this.setActorModel(data['actor']);
        this.setRepoModel(data['repo']);
    }

    public static getStaticName = (): string => 'event';

    private setActorModel = (actorObject: object): void => {
        this.actor = actorObject ? new ActorModel(actorObject) : null;
    }

    private setRepoModel = (repoObject: object): void => {
        this.repo = repoObject ? new RepoModel(repoObject) : null;
    }

    /**
     * Returns formatted event type
     * Despite what the IDE says, this is used within templates
     * @todo either use a pipe or set on component...
     */
    public getType = (): string => {
        return changeCase.title(this.type.value);
    }

    protected assignableProperties = (): Map<string, any> => {
        const map = new Map([
            ['type', AnyProperty],
            ['payload', AnyProperty],
        ]);
        return map;
    }
}

export default EventModel;
