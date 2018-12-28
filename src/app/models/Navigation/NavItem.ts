class NavItem {

    static assignableProperties: string[] = [
        'routerLink',
        'routerLinkActive',
        'title',
        'label',
        'click',
    ];

    public routerLink: string;
    public routerLinkActive: string = 'active';
    public title: string;
    public label: string;
    public click: Function = () => null;

    constructor(params: object) {
        this.assignProperties(params);
    }

    private assignProperties = (params: object): void => {
        Object.entries(params).forEach(([property, value]) => {
            if (NavItem.assignableProperties.includes(property)) {
                this[property] = value;
            }
        });
    }

}

export default NavItem;
