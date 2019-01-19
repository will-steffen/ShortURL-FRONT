import { Component } from '@angular/core';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { I18n } from 'src/i18n';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {

    icon = {
        no: faTimes,
        yes: faCheck
    }
    
    constructor(public i18n: I18n) { }    
}
