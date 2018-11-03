import PrimitiveProperty from './Property';
import * as moment from 'moment';

class TimeProperty extends PrimitiveProperty {

    constructor(value: any) {

        super(value);

        return moment(value);

    }

}

export default TimeProperty;
