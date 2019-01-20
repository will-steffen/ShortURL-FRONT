import { Injectable } from "@angular/core";
import { ServiceHandler } from "src/handlers/service.handler";
import { SaveShortUrlRequestDTO } from "src/models/dto/request/save-short-url-request-dto";
import { ApiRoute } from "src/enums/api-route";
import { ShortUrl } from "src/models/entities/short-url";
import { User } from "src/models/entities/user";
import { StorageHandler } from "src/handlers/storage.handler";
import { Table } from "src/enums/table";

@Injectable()
export class UserService {
    constructor(private service: ServiceHandler) { }

    checkUser() {
        if(this.getUser()){
            this.isUserValid()
                .then(() => { })
                .catch(() => this.saveRequestNewUser())
        }else{
            this.saveRequestNewUser();
        }
    }

    private saveRequestNewUser() {
        this.requestNewUser()
            .then(user => StorageHandler.Save(Table.USER, user))
            .catch(() => { })
    }

    getUser() : User {
        let userList = StorageHandler.List(Table.USER);   
        if(userList.any()) 
            return userList.first();  
    }

    requestNewUser(): Promise<User>{
        return new Promise((resolve, reject) => {
            this.service.Get(ApiRoute.user.default,)
                .then(data => { resolve(User.fromData(data)); })
                .catch(err => { reject(err) });
        });
    }

    isUserValid(): Promise<void> {
        return new Promise((resolve, reject) => {

            let user = this.getUser();
            if(!user) return reject()

            this.service.Get(ApiRoute.user.valid + "/" + user.id)
                .then(data => {
                    if(data) resolve();
                    else reject();
                })
                .catch(err => { reject() });
        });
    }
}