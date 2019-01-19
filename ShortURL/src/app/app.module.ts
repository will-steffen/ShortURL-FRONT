import '../utils/array';
import '../utils/string';
import '../utils/date';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BlockUIModule } from 'ng-block-ui';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SidebarModule } from 'primeng/sidebar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceHandler } from 'src/handlers/service.handler';
import { I18n } from 'src/i18n';
import { AlertHandler } from 'src/handlers/alert.handler';
import { HomePage } from 'src/pages/public/home/home.page';
import { UrlService } from 'src/services/UrlService';


@NgModule({
  declarations: [
    AppComponent,

    HomePage
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BlockUIModule.forRoot(),
    ToastrModule.forRoot(),
    FontAwesomeModule,
    OverlayPanelModule,
    SidebarModule,
    TableModule,
    ConfirmDialogModule
  ],
  providers: [
    ConfirmationService,

    ServiceHandler,
    AlertHandler,
    I18n,

    UrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
