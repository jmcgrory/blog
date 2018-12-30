import Property from './Property';

class HtmlProperty extends Property {

    constructor(value: string) {
        super(value);
        this.value = JSON.parse(value);
    }

}

export default HtmlProperty;
