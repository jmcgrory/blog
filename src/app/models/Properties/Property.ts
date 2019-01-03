abstract class Property {

    public value: any;

    protected constructor(value: any) {
        this.value = value;
    }

    protected isValid = (): boolean => true;

    public toString = (): string => {
        return this.isValid() ? this.getString() : null;
    }

    protected getString = (): string => `${this.value}`;

    public setDefault = (): void => {
        this.value = null;
    }
}

export default Property;
