import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { I18n } from "src/i18n";
import { UrlService } from "src/services/url-service";
import { NgBlockUI, BlockUI } from "ng-block-ui";
import { ShortUrl } from "src/models/entities/short-url";
import { HttpStatus } from "src/enums/http-status";
import { AlertHandler } from "src/handlers/alert.handler";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { RouteConfig } from "src/enums/route-config";

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
    @ViewChild('shortUrlLink') shortUrlLink: ElementRef;
    
    icon = {
        pointer: faMousePointer
    }

    @BlockUI() blockUI: NgBlockUI;
    constructor(
        public i18n: I18n,
        private urlService: UrlService
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

    copyShortUrlLink() {
        this.shortUrlLink.nativeElement.select();
        document.execCommand("copy");
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