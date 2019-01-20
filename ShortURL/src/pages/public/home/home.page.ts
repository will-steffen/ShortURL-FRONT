import { Component, OnInit } from "@angular/core";
import { I18n } from "src/i18n";
import { UrlService } from "src/services/url-service";
import { NgBlockUI, BlockUI } from "ng-block-ui";
import { ShortUrl } from "src/models/entities/short-url";
import { HttpStatus } from "src/enums/http-status";
import { RouteConfig } from "src/enums/route-config";
import { Router } from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.less']
})
export class HomePage implements OnInit {  

    titleIndex = 0;
    urlInput: string = '';
    shortUrlList: ShortUrl[] = [];
    linkProblem = false;    

    @BlockUI() blockUI: NgBlockUI;
    constructor(
        public i18n: I18n,
        private urlService: UrlService,
        private router: Router
    ) { 
        this.titleIndex = Math.floor((i18n.t.page.home.title.length) * Math.random() - 0.01);
        this.countClickLoop();
    }

    ngOnInit() {
        this.urlService.getLast()
            .then(list => this.shortUrlList = list)
            .catch(() => { });
    }

    createShortUrl() {
        if(!this.urlInput) return;
        this.blockUI.start();
        this.urlService.getShortUrl(this.urlInput)
            .then(url => {
                this.urlInput = url.original;
                let last = this.shortUrlList.first();
                this.shortUrlList = [url];
                if(last) this.shortUrlList.push(last);
            })
            .catch(err => { 
                console.log(err);
                if(err.status == HttpStatus.NOT_ACCEPTABLE){
                    this.linkProblem = true;
                    setTimeout(() => { this.linkProblem = false }, 1000)
                }
                // this.shortUrl = null;
             })
            .then(() => this.blockUI.stop());
    }   

    countClickLoop() {
        if(window.location.pathname.contains(RouteConfig.home)){
            this.shortUrlList.forEach(shortUrl => {
                this.urlService.getCount(shortUrl.code)
                    .then(n => { 
                        shortUrl.countClick = n;
                        shortUrl.showCount = true;
                    })
                    .catch(() => { });
            });    
            setTimeout(() => { this.countClickLoop() }, 2000);
        }
    }
    
}