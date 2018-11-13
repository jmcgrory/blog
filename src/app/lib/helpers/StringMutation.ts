type Case = 'none' | 'camel' | 'snake' | 'kebab' | 'pascal' | 'title' | 'constant';

class StringMutation {

    private original: string;

    private split: string[];

    private type: Case;

    constructor(string: string, type: Case) {

        this.original = string;

        this.setType(

            typeof type !== "undefined" ? type : this.findType()

        );

    }

    public getType = (): Case => {

        return this.type;

    }

    private findType = (): Case => {

        const str = this.original;

        const length = str.length;

        if (length === 0) return 'none';

        if (str.includes('-')) {

            return 'kebab';

        } else if (str.includes(' ')) {

            return 'title';

        } else if (str.includes('_')) {

            if (this.isUpperCase(str)) {

                return 'constant';

            } else {

                return 'snake';

            }

        } else {

            return this.isUpperCase(str.charAt(0)) ? 'pascal' : 'camel';

        }

        return 'none';

    }

    private isUpperCase = (string: string): boolean => {

        const char = string.split('').find(

            (character) => isNaN(parseInt(character))

        );

        return char == char.toUpperCase();

    }

    private setType = (type: Case): void => {

        this.type = type;

    }

    public getOriginal = (): string => {

        return this.original;

    }

    protected snakeToCamelCase = (string: string): string => {

        if (!string.includes('_')) return string;

        return string.split('_').reduce((prev, current, i) => {

            const appendage = (i > 0) ? `${current[0].toUpperCase()}${current.substring(1)}` : current;

            return `${prev}${appendage}`;

        });

    }

}
