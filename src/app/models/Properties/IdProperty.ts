import Property from './Property';

/**
 * @todo consider:
 *  -   creating ArrayProperty and extending this from there
 *  -   change to IdsProperty which only always handles OneToMany relations
 */
class IdProperty extends Property {
    constructor(value: any) {
        super(value);
        this.value = value;
    }
}

export default IdProperty;
