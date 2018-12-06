type Level = 'error' | 'info' | 'fatal' | 'success' | 'debug';

class Notice {

    private message: string;
    private level: Level;
    private code: number;
    private actions: any[]; // ButtonModel?

    constructor(
        message: string,
        level: Level,
        code?: number,
        actions: any[] = []
    ) {
        this.message = message;
        this.level = level;
        if (typeof code === 'number') this.code = code;
        if (actions.length) this.actions = actions;
        return this;
    }

    public getClasses = (): string[] => [
        `notice`,
        `${this.level}`,
    ];

}

export default Notice;
