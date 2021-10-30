export class BaseModel {
    _id: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(object: any = null) {
        if (object !== null) {
            for (const member in object) {
                if (member !== '__v') {
                    // @ts-ignore
                    this[member] = object[member];
                }
            }
        }
    }
}
