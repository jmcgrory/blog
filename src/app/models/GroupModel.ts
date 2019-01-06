import Model from './Model';
import { AnyProperty } from './Properties';
import Selectable from '../lib/Selectable';

abstract class GroupModel extends Model implements Selectable {

    public name: AnyProperty;
    public description: AnyProperty;
    public type: AnyProperty;
    public isSelected: boolean = false;

    protected constructor(data: object) {
        super(data);
        this.fromData(data);
    }

    public toggle = (newSelect: boolean = null): void => {
        if (newSelect !== null) {
            this.isSelected = newSelect;
        } else {
            this.isSelected = !this.isSelected;
        }
    }

    protected assignableProperties = (): Map<string, any> => new Map([
        ['name', AnyProperty],
        ['description', AnyProperty],
        ['type', AnyProperty],
    ])

}

export default GroupModel;
