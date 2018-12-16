type Order = 'ASC' | 'DESC';

/**
 * @todo needs to handle almost any input at base
 */
class APIFilter {

    private limit: number;
    private order: Order;
    private orderBy: string;
    private offset: number;
    private id: string;
    private ids: string[];

    public constructor(data: object) {
        this.buildFromProperties(data);
        return this;
    }

    private buildFromProperties = (data: object): void => {
        const allowableProperties = this.getProperties();
        [...Object.entries(data)].forEach(([key, value]) => {
            if (allowableProperties.includes(key)) {
                this[key] = value;
            }
        });
    }

    private getProperties = (): any[] => [
        'limit',
        'order',
        'orderBy',
        'offset',
        'id',
        'ids'
    ];

    public toMap = (): Map<string, string> => {
        let map = new Map();
        this.getProperties().forEach((property) => {
            const value = this[property];
            if (this.valueIsValid(value)) {
                map.set(property, `${value}`);
            }
        });
        return map;
    }

    private valueIsValid = (value: any): boolean => {
        return (typeof value !== 'undefined' && value !== null);
    }

}

export default APIFilter;
