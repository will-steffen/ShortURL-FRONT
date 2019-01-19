import { Component } from "@angular/core";
import { I18n } from "src/i18n";
import { UrlService } from "src/services/UrlService";
import { NgBlockUI, BlockUI } from "ng-block-ui";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.less']
})
export class HomePage {  

    urlInput: string = '';
    urlShort: string = '';

    @BlockUI() blockUI: NgBlockUI;
    constructor(
        public i18n: I18n,
        private urlService: UrlService
    ) { }

    createShortUrl() {
        this.blockUI.start();
        this.urlService.getShortUrl(this.urlInput)
            .then(url => {
                this.urlInput = url.original;
                this.urlShort = url.shortUrl;
            })
            .catch(err => { console.log(err) })
            .then(() => this.blockUI.stop());
    }
}