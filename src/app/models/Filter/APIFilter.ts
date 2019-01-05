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
    private match: object;

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
        'ids',
        'match'
    ]

    public toMap = (): Map<string, string> => {
        return this.getProperties().reduce((previous, property) => {
            const value = this[property];
            if (this.valueIsValid(value)) {
                previous.set(property, `${value}`);
            }
            return previous;
        }, new Map([]));
    }

    private valueIsValid = (value: any): boolean => {
        return (typeof value !== 'undefined' && value !== null);
    }

}

export default APIFilter;
