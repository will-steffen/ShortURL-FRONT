import { Component } from "@angular/core";
import { I18n } from "src/i18n";
import { Router } from "@angular/router";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.less']
})
export class FooterComponent {
    constructor(
        public i18n: I18n,
        private router: Router
    ){ }

}