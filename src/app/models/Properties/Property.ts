class Property {

    public value: any;

    constructor(value: any) {

        this.value = value;

    }

    public toString = (): string => {

        console.log('BASE TOSTRING');

        return `${this.value}`;

    }

}

export default Property;
