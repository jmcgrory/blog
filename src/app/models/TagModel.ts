import GroupModel from './GroupModel';

class TagModel extends GroupModel {

    constructor(data: object) {
        super(data);
        this.fromData(data);
    }

    public static getStaticName = (): string => 'tag';

}

export default TagModel;
