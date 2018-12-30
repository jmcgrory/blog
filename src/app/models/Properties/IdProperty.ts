import Property from './Property';

class IdProperty extends Property {

    constructor(value: any) {
        super(value);
        this.value = value;
    }

}

export default IdProperty;
