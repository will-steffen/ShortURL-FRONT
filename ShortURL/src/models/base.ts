export class BaseModel {

    id: number;
    createDate: Date;
    
    static fromData(data: any) {
        if(data == null) return null;
        const e = Object.assign(new this(), data);
        if(e.createDate) e.createDate = new Date(e.createDate);
        return e;
    }
}