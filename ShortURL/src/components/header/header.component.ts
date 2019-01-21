import { Component } from "@angular/core";
import { I18n } from "src/i18n";
import { Language } from "src/enums/language";
import { Router } from "@angular/router";
import { RouteConfig } from "src/enums/route-config";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent {

    Language = Language;

    constructor(
        public i18n: I18n,
        private router: Router
    ){ }

    changeLanguage(code: Language) {
        this.i18n.changeLanguage(code);
    }

    goHome() {
        this.router.navigate([RouteConfig.home]);
    }
}