import Model from '../models/Model';

/**
 * Handles local storing/requesting of API Data
 * @todo needs to handle expirations
 * @todo needs to be able to remove models
 */
class APIStore {

    private static store: Storage = window.localStorage;

    public static setModel = (
        model: Model
    ): void => {
        const modelName = model.getModelName();
        const id = model.id.toString();
        APIStore.store.setItem(
            modelName,
            JSON.stringify({
                ...APIStore.getModelStore(modelName),
                [id]: model.toObject()
            })
        )
    }

    public static setModels = (
        modelData: Model[]
    ): void => {
        const modelName = modelData[0].getModelName();
        let newModels = {};
        modelData.forEach((model) => {
            newModels[model.id.toString()] = model.toObject();
        });
        const modelStore = APIStore.getModelStore(modelName);
        APIStore.store.setItem(
            modelName,
            JSON.stringify({
                ...modelStore,
                ...newModels
            })
        );
    }

    /**
     * Returns model
     */
    public static getModel = (
        ModelClass: any, // Model Class
        id: number
    ): Model => {
        const modelName = ModelClass.getStaticName();
        const modelStore = APIStore.getModelStore(modelName);
        return new ModelClass(modelStore[id]) || null;
    }

    /**
     * Returns ordered array of stored model objects
     * i.e. [ {}, null, {} ]
     */
    public static getModels = (
        ModelClass: any, // Model Class
        ids: number[]
    ): Model[] => {
        const modelName = ModelClass.getStaticName();
        const modelStore = APIStore.getModelStore(modelName);
        return ids.map((id) => {
            return new ModelClass(modelStore[id]) || null;
        });
    }

    /**
     * Gets modelStore, if none creates one
     */
    private static getModelStore = (modelName: string): object => {
        const modelStore = APIStore.store.getItem(modelName);
        if (modelStore === null) {
            APIStore.store.setItem(modelName, JSON.stringify({}));
            return {};
        }
        return JSON.parse(modelStore);
    }

}

export default APIStore;
