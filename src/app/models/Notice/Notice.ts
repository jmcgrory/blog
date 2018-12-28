import Level from './Level';
import Action from '../Action/Action';

class Notice {

    private static icons: object = {
        info: 'info',
        success: 'sentiment_satisfied',
        fatal: 'error',
        error: 'warning',
        debug: 'bug_report',
        warning: 'warning',
    }
    private id: number;
    private readonly message: string;
    public readonly level: Level;
    private code: number;
    private actions: Action[];
    private readonly icon: string;

    constructor(
        message: string,
        level: Level,
        code?: number,
        actions: Action[] = [],
        icon: string = null
    ) {
        this.icon = icon || Notice.icons[level];
        this.message = message;
        this.level = level;
        if (typeof code === 'number') {
            this.code = code;
        }
        if (actions.length) {
            this.actions = actions;
        }
        return this;
    }

    public getMessage = (): string => `${this.message}`;

    public getIcon = (): string => `${this.icon}`;

    public setActions = (...actions: any): void => {
        this.actions = [...actions];
    }

    public getActions = (): Action[] => this.actions;

    public setId = (id: number): void => {
        this.id = id;
    }

    public getId = (): number => {
        return this.id;
    }

}

export default Notice;
