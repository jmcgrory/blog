import Property from './Property';

class HtmlProperty extends Property {

    constructor(value: string) {
        super(value);
        if (value && value.length) {
            this.value = JSON.parse(value);
        }
    }

}

export default HtmlProperty;
