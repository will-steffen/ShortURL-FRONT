import { BaseModel } from "src/models/base";

export class ShortUrl extends BaseModel {
    original: string;
    shortUrl: string;
}