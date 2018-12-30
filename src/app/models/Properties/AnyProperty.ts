import Property from './Property';

class AnyProperty extends Property {
    constructor(value: any) {
        super(value);
        this.value = value;
    }
}

export default AnyProperty;
