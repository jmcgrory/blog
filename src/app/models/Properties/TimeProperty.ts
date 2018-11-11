import PrimitiveProperty from './Property';
import * as moment from 'moment';

class TimeProperty extends PrimitiveProperty {

    public value: any;

    constructor(value: any) {

        super(value);

        this.value = moment(value);

    }

}

export default TimeProperty;
