/**
 * Action Model Class
 *
 * Used for passing defined actions between components
 */
class Action {

    public action: Function;
    public icon: string;
    public label: string;

    constructor(
        action: Function,
        icon: string,
        label: string,
    ) {
        this.action = action || Action.defaultAction;
        this.icon = icon;
        this.label = label;
    }

    private static defaultAction = (event): void => {
        console.warn('No method set.', event);
    }

}

export default Action;
