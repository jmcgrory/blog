type Case = 'none' | 'camel' | 'snake' | 'kebab' | 'pascal' | 'title' | 'constant';

class StringMutation {

    private original: string;

    private split: string[];

    private type: Case;

    constructor(string: string, type: Case) {

        this.original = string;

        this.setType(

            typeof type !== "undefined" ? type : this.getType()

        );

    }

    private getType = (): Case => {

        const string = this.original;

        const length = string.length;

        if (length === 0) return 'none';

        if (string.includes('-')) {

            return 'kebab';

        } else if (string.includes(' ')) {

            return 'title';

        } else if (string.includes('_')) {

            if (this.isUpperCase(string)) {

                return 'constant';

            } else {

                return 'snake';

            }

        } else {

            // Pascal or Camel...

            if (this.isUpperCase(string.charAt(0))) {

                return 'pascal';

            } else {

                return 'camel';

            }

        }

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
