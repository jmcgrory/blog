import Property from './Property';
import * as moment from 'moment';

class TimeProperty extends Property {

    public value: any;

    constructor(value: any) {
        super(value);
        this.value = moment(value);
    }

    protected getString = (): string => {
        return this.value.format();
    }

    protected isValid = (): boolean => {
        return this.value.isValid();
    }

    public fromNow = (): string => {
        return moment().to(this.value);
    }
}

export default TimeProperty;
