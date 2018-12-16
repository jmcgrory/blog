abstract class Property {

    public value: any;

    constructor(value: any) {
        this.value = value;
    }

    public toString = (): string => {
        return `${this.value}`;
    }
}

export default Property;
