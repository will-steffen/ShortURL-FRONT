import { Component, ViewChild, ElementRef } from "@angular/core";
import { I18n } from "src/i18n";
import { UrlService } from "src/services/UrlService";
import { NgBlockUI, BlockUI } from "ng-block-ui";
import { ShortUrl } from "src/models/entities/short-url";
import { HttpStatus } from "src/enums/http-status";
import { AlertHandler } from "src/handlers/alert.handler";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.less']
})
export class HomePage {  

    titleIndex = 0;
    urlInput: string = '';
    shortUrl: ShortUrl = null;
    linkProblem = false;
    @ViewChild('shortUrlLink') shortUrlLink: ElementRef;

    @BlockUI() blockUI: NgBlockUI;
    constructor(
        public i18n: I18n,
        private urlService: UrlService,
        private alert: AlertHandler
    ) { 
        this.titleIndex = Math.floor((i18n.t.page.home.title.length) * Math.random() - 0.01);
    }

    createShortUrl() {
        this.blockUI.start();
        this.urlService.getShortUrl(this.urlInput)
            .then(url => {
                this.urlInput = url.original;
                this.shortUrl = url;
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
}