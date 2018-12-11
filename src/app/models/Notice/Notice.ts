import Level from './Level';

class Notice {

    private id: number;
    private message: string;
    private level: Level;
    private code: number;
    private actions: any[]; // ButtonModel?
    private static icons: object = {
        info: 'info',
        success: 'sentiment_satisfied',
        fatal: 'error',
        error: 'warning',
        debug: 'bug_report',
    }
    private icon: string;

    constructor(
        message: string,
        level: Level,
        code?: number,
        actions: any[] = [],
        icon: string = Notice.icons[level]
    ) {
        this.icon = icon;
        this.message = message;
        this.level = level;
        if (typeof code === 'number') this.code = code;
        if (actions.length) this.actions = actions;
        return this;
    }

    public getMessage = (): string => `${this.message}`;

    public getIcon = (): string => `${this.icon}`;

    public getClasses = (): string[] => [
        `notice`,
        `${this.level}`,
    ];

    public setActions = (...actions: any): void => {
        this.actions = [...actions];
    }

    public setId = (id: number): void => {
        this.id = id;
    }

    public getId = (): number => {
        return this.id;
    }

}

export default Notice;
