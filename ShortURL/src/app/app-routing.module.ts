import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConfig } from 'src/enums/route-config';
import { HomePage } from 'src/pages/public/home/home.page';
import { NotFoundPage } from 'src/pages/public/not-found/not-found.page';
import { StatsPage } from 'src/pages/public/stats/stats.page';

const routes: Routes = [
    { path: RouteConfig.home, component: HomePage },
    { path: RouteConfig.notFound, component: NotFoundPage },
    { path: RouteConfig.notFound + "/:code", component: NotFoundPage },
    { path: RouteConfig.stats + "/:code", component: StatsPage },    
    { path: '**', redirectTo: RouteConfig.home }
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
