type Order = 'ASC' | 'DESC';

class APIFilter {

    private limit: number;
    private order: Order;
    private orderBy: string;
    private offset: number;

    public constructor(
        limit: number = null,
        order: Order = 'ASC',
        orderBy: string = 'createdAt',
        offset: number = null,
    ) {
        this.limit = limit;
        this.order = order;
        this.orderBy = orderBy;
        this.offset = offset;
        return this;
    }

    private getProperties = (): any[] => [
        'limit',
        'order',
        'orderBy',
        'offset'
    ];

    public toMap = (): Map<string, string> => {
        let map = new Map();
        this.getProperties().forEach((property) => {
            const value = this[property];
            if (value !== null) {
                map.set(property, `${value}`);
            }
        });
        return map;
    }

}

export default APIFilter;
