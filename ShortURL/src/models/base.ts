export class BaseModel {

    id: number;
    
    static fromData(data: any) {
        if(data == null) return null;
        const e = Object.assign(new this(), data);
        return e;
    }
}