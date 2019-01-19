import { Component } from "@angular/core";
import { I18n } from "src/i18n";
import { Language } from "src/enums/language";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent {

    Language = Language;

    constructor(public i18n: I18n){ }

    changeLanguage(code: Language) {
        this.i18n.changeLanguage(code);
    }
}