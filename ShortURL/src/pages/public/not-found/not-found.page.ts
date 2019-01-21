import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { I18n } from "src/i18n";
import { UrlService } from "src/services/url-service";
import { NgBlockUI, BlockUI } from "ng-block-ui";
import { ShortUrl } from "src/models/entities/short-url";
import { ActivatedRoute, Router } from "@angular/router";
import { RouteConfig } from "src/enums/route-config";

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.page.html',
    styleUrls: ['./not-found.page.less']
})
export class NotFoundPage implements OnInit {

    code: string = '';    
    @ViewChild('cloud1') cloud1: ElementRef;
    @ViewChild('cloud2') cloud2: ElementRef;
    @ViewChild('cloud3') cloud3: ElementRef;
    clouds = [];
    cloudDelay = 2000;

    @BlockUI() blockUI: NgBlockUI;
    constructor(
        public i18n: I18n,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { 
        this.code = this.activatedRoute.snapshot.paramMap.get('code');
    }

    ngOnInit() {
        this.clouds = [ this.cloud1, this.cloud2, this.cloud3 ];
        this.cloudLoop();
    }

    cloudLoop() {
        if(window.location.pathname.contains(RouteConfig.notFound)){
            this.clouds.forEach(cloud => {
                let top = (Math.random() * 10) + 20;
                let left = (Math.random() * 30) + 30;
                cloud.nativeElement.style.top = top + 'vh';
                cloud.nativeElement.style.left = left + 'vw';
                setTimeout(() => this.cloudLoop(), this.cloudDelay);
                this.cloudDelay = 120000;
            });
        }
    }

    createLink() {
        this.router.navigate([RouteConfig.home]);
    }
}
