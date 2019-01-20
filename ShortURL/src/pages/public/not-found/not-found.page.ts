import { Component, ViewChild, ElementRef } from "@angular/core";
import { I18n } from "src/i18n";
import { UrlService } from "src/services/UrlService";
import { NgBlockUI, BlockUI } from "ng-block-ui";
import { ShortUrl } from "src/models/entities/short-url";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.page.html',
    styleUrls: ['./not-found.page.less']
})
export class NotFoundPage {

    code: string = '';

    @BlockUI() blockUI: NgBlockUI;
    constructor(
        public i18n: I18n,
        private activatedRoute: ActivatedRoute
    ) { 
        this.code = this.activatedRoute.snapshot.paramMap.get('code');
    }
}