import Model from '../models/Model';
import Property from '../models/Properties/Property';

/**
 * Handles local storing/requesting of API Data
 */
class APIStorage {

    private static storage: Storage = window.localStorage;

    public static setModel = (
        modelName: string,
        model: Model
    ): void => {
        const id = model.id.toString();
        console.log()
        APIStorage.storage.setItem(
            modelName,
            JSON.stringify({
                ...APIStorage.getModelStorage(modelName),
                [id]: model.toObject()
            })
        )

    }

    public static setModels = (
        modelName: string,
        modelData: Model[]
    ): void => {
        APIStorage.getModelStorage(modelName);
    }

    public static getModel = (
        modelName: string,
        id: Property
    ): Model => {
        APIStorage.getModelStorage(modelName);
        return null;
    }

    public static getModels = (
        modelName: string,
        ids: Property[]
    ): Model[] => {
        APIStorage.getModelStorage(modelName);
        return [];
    }

    /**
     * If model doesn't have a store it creates one
     */
    private static getModelStorage = (modelName: string): object => {
        const modelStorage = APIStorage.storage.getItem(modelName);
        if (modelStorage === null) {
            APIStorage.storage.setItem(modelName, JSON.stringify({}));
            return {};
        }
        console.log(modelStorage);
        return JSON.parse(modelStorage);
    }

    private static findModel = (
        modelName: string,
        id: Property
    ): boolean => {
        const modelStorage = APIStorage.getModelStorage(modelName);
        return (typeof modelStorage[id.toString()] === "object");
    }

    private static findModels = (
        modelName: string,
        ids: Property[]
    ): boolean[] => {
        return [];
    }

}

export default APIStorage;
