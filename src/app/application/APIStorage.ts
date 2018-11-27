import Model from '../models/Model';

/**
 * Handles local storing/requesting of API Data
 */
class APIStorage {

    private static storage: Storage;

    public constructor(storage: Storage) {
        APIStorage.storage = storage;
    }

    public static setModel = (
        modelName: string,
        model: Model
    ): void => {
        const foundModel = APIStorage.findModel(
            model.getModelName(),
            model.id
        );
        // spread into regardless...
    }

    public static setModels = (
        modelName: string,
        modelData: Model[]
    ): void => {

    }

    public static getModel = (
        modelName: string,
        id: number
    ): Model => {
        return null;
    }

    public static getModels = (
        modelName: string,
        ids: number[]
    ): Model[] => {
        return [];
    }

    private static findModel = (
        modelName: string,
        id: number
    ): boolean => {
        return false;
    }

    private static findModels = (
        modelName: string,
        ids: number[]
    ): boolean[] => {
        return [];
    }

}

export default APIStorage;
