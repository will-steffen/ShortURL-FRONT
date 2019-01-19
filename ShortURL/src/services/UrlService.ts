import { Injectable } from "@angular/core";
import { ServiceHandler } from "src/handlers/service.handler";
import { SaveShortUrlRequestDTO } from "src/models/dto/request/save-short-url-request-dto";
import { ApiRoute } from "src/enums/api-route";
import { ShortUrl } from "src/models/entities/short-url";

@Injectable()
export class UrlService {
    constructor(private service: ServiceHandler){}

    getShortUrl(originalUrl: string): Promise<ShortUrl>{
        return new Promise((resolve, reject) => {
            let obj = new SaveShortUrlRequestDTO();
            obj.url = originalUrl
            this.service.Post(ApiRoute.url.default, obj)
                .then(data => { resolve(ShortUrl.fromData(data)); })
                .catch(err => { reject(err) });
        });
    }
}