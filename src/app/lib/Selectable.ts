import { AnyProperty } from '../models/Properties';

interface Selectable {
    id: AnyProperty;
    name: AnyProperty;
    isSelected: boolean;
    toggle: Function;
}

export default Selectable;
