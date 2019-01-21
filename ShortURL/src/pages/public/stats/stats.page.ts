import { Component } from "@angular/core";
import { I18n } from "src/i18n";
import { ActivatedRoute, Router } from "@angular/router";
import { NgBlockUI, BlockUI } from "ng-block-ui";
import { UrlService } from "src/services/url-service";
import { ShortUrl } from "src/models/entities/short-url";
import { RouteConfig } from "src/enums/route-config";

@Component({
    selector: 'app-stats',
    templateUrl: './stats.page.html',
    styleUrls: ['./stats.page.less']
})
export class StatsPage {

    code: string = '';
    @BlockUI() blockUI: NgBlockUI;
    shortUrl: ShortUrl;
    linkTitle = '';
    
    constructor(
        public i18n: I18n,
        private activatedRoute: ActivatedRoute,
        private urlService: UrlService,
        private router: Router
    ){ 
        this.code = this.activatedRoute.snapshot.paramMap.get('code');
        if(!this.code) router.navigate([RouteConfig.home]); 
        else this.refreshLoop(true);           
    }

    refreshLoop(block = false) {
        if(window.location.pathname.contains(RouteConfig.stats)){
            this.loadShortUrl(block); 
            setTimeout(() => { this.refreshLoop() }, 5000);
        }
    }

    loadShortUrl(block: boolean) {
        if(block) this.blockUI.start()

        this.urlService.getStats(this.code)
            .then(url => {
                this.shortUrl = url;
                this.shortUrl.showCount = true;
                this.getLinkTitle();
            })
            .catch(err => {
                console.log(err);
                if(block){
                    this.router.navigate([RouteConfig.notFound, this.code]);
                }
            })
            .then(() => { if(block) this.blockUI.stop() } );
    }

    getLinkTitle() {
        if(!this.linkTitle){
            this.urlService.getUrlTitle(this.shortUrl.code)
                .then(data => this.linkTitle = data.title )
                .catch(err => { this.linkTitle = this.shortUrl.original })
        }
    }

    getDateFormat(date: Date) {
        if(!date) return '';
        return date.toLocaleString();
    }

    
}