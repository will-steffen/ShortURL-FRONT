import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServiceHandler {
    constructor( 
        public http: HttpClient,
        public router: Router
    ){ }

    Post(path: string, body: any, isFullPath = false): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiPath(path, isFullPath), body, this.GetHeaders()).toPromise()
                .then(d => resolve(d))
                .catch(err => this.handleError(err, reject));
        });         
    }

    Get(path: string, isFullPath = false): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiPath(path, isFullPath), this.GetHeaders()).toPromise()
                .then(d => resolve(d))
                .catch(err => this.handleError(err, reject));
        });
    }

    Delete(path: string, isFullPath = false): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.delete(this.apiPath(path,isFullPath), this.GetHeaders()).toPromise()
                .then(d => resolve(d))
                .catch(err => this.handleError(err, reject));
        });
    }

    private GetHeaders() : any {
        let token = this.GetAuthToken();
        if(token){
            let h = new HttpHeaders();
            h = h.set("Authorization", 'Bearer ' + token);
            return { headers: h };
        }        
    }

    private GetAuthToken() {
        return "";
    }

    private handleError(err, rejectFunction) {        
        rejectFunction(err);
    }

    private apiPath(path: string, isFullPath: boolean) {
        if(path.contains("http") || isFullPath) return path;
        return environment.apiURL + path;
    }
}