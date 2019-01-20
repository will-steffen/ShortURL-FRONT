import { Injectable } from "@angular/core";
import { ServiceHandler } from "src/handlers/service.handler";
import { SaveShortUrlRequestDTO } from "src/models/dto/request/save-short-url-request-dto";
import { ApiRoute } from "src/enums/api-route";
import { ShortUrl } from "src/models/entities/short-url";
import { UserService } from "./user-service";

@Injectable()
export class UrlService {
    constructor(
        private service: ServiceHandler,
        private userService: UserService
    ){}

    getShortUrl(originalUrl: string): Promise<ShortUrl>{
        return new Promise((resolve, reject) => {
            let obj = new SaveShortUrlRequestDTO();
            obj.url = originalUrl;
            let user = this.userService.getUser();
            obj.userId = user ? user.id : null;
            this.service.Post(ApiRoute.url.default, obj)
                .then(data => { resolve(ShortUrl.fromData(data)); })
                .catch(err => { reject(err) });
        });
    }

    getCount(code: string): Promise<number> {
        return new Promise((resolve, reject) => {
            this.service.Get(ApiRoute.url.count + "/" + code)
                .then(data => { resolve(data) })
                .catch(err => { reject(err) });
        });
    }

    getLast(): Promise<ShortUrl[]>{
        return new Promise((resolve, reject) => {            
            let user = this.userService.getUser();
            if(!user) return resolve([]); 
            this.service.Get(ApiRoute.url.last + "/" + user.id)
                .then(data => { resolve(data.map(x => ShortUrl.fromData(x))); })
                .catch(err => { reject(err) });
        });
    }
}