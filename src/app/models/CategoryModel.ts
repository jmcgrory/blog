import GroupModel from './GroupModel';

class CategoryModel extends GroupModel {

    constructor(data: object) {
        super(data);
        this.fromData(data);
    }

    public static getStaticName = (): string => 'category';

}

export default CategoryModel;
