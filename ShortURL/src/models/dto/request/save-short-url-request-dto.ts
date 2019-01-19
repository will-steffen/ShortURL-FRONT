import { BaseModel } from "src/models/base";

export class SaveShortUrlRequestDTO extends BaseModel {
    url: string;
}