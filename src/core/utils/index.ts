

class Utils {
    private static instance: Utils;

    private constructor() {}

    public static getInstance(): Utils {
        if (!Utils.instance) {
            Utils.instance = new Utils();
        }

        return Utils.instance;
    }


    public generateIdFromArray(arr): number {
        const id: number = (arr.length - 1) + 1;

        return id;
    }
    
}


const utils: Utils = Utils.getInstance();
export {
    utils
}