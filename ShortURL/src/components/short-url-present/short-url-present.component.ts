import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { I18n } from "src/i18n";
import { ShortUrl } from "src/models/entities/short-url";
import { Router } from "@angular/router";
import { RouteConfig } from "src/enums/route-config";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-short-url-present',
    templateUrl: './short-url-present.component.html',
    styleUrls: ['./short-url-present.component.less']
})
export class ShortUrlPresentComponent {

    @Input('shortUrl') shortUrl: ShortUrl;
    @ViewChild('shortUrlLink') shortUrlLink: ElementRef;
    
    icon = {
        pointer: faMousePointer
    }

    constructor(
        public i18n: I18n,
        private router: Router
    ){ }

    openStats() {
        this.router.navigate([RouteConfig.stats, this.shortUrl.code]);
    }

    copyShortUrlLink() {
        this.shortUrlLink.nativeElement.select();
        document.execCommand("copy");
    }

}