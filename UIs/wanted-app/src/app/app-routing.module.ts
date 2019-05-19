import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CitoComponent} from './cito/cito.component';
import {CitoDetectComponent} from './cito/cito-detect.component';

const routes: Routes = [
    {path: '', redirectTo: '/citos/12', pathMatch: 'full'},
    {path: 'citos/:id', component: CitoComponent, pathMatch: 'full'},
    {path: 'citos/:id/detect', component: CitoDetectComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
