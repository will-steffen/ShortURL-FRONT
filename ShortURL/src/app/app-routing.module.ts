import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConfig } from 'src/enums/route-config';
import { HomePage } from 'src/pages/public/home/home.page';

const routes: Routes = [
    { path: RouteConfig.home, component: HomePage },
    { path: '**', redirectTo: RouteConfig.home }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
