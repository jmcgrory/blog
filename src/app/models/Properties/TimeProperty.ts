import PrimitiveProperty from './Property';
import * as moment from 'moment';

class TimeProperty extends PrimitiveProperty {

    public value: any;

    constructor(value: any) {
        super(value);
        this.value = moment(value);
    }

    public fromNow = (): string => {
        return moment().to(this.value);
    }

    public toString = (): string => {
        return this.value.format();
    }
}

export default TimeProperty;
