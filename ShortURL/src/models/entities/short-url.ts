import { BaseModel } from "src/models/base";
import { Click } from "./click";

export class ShortUrl extends BaseModel {
    original: string;
    shortUrl: string;
    code: string;

    countClick: number = 0;
    showCount = false;

    createDate: Date;
    clickList: Click[];
 
    static fromData(data) : ShortUrl{
        let e: ShortUrl = super.fromData(data);        
        if(e.clickList) e.clickList = e.clickList.map(x => Click.fromData(x));
        return e;
    }

}