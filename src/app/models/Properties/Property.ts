abstract class Property {

    public value: any;

    protected constructor(value: any) {
        this.value = value;
    }

    public toString = (): string => {
        return `${this.value}`;
    }

    public setDefault = (): void => {
        this.value = null;
    }
}

export default Property;
