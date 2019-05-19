import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'cito-app',
    template: `
        <div style="vertical-align: middle; height: 50px;"><h3 class="lala" style="padding-top: 0; height: 100%;">{{naslov}}</h3></div>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    naslov = 'WANTED';
}
