import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

/* File selector imports */
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

/* Truly UI imports */
import { CoreModule, LoaderModule } from 'truly-ui'; // CoreModule

import {AppComponent} from './app.component';
import {CitoComponent} from './cito/cito.component';
import {CitoDetectComponent} from './cito/cito-detect.component';
import {CitoService} from './cito/services/cito.service';
import { ImageService } from './cito/services/image.service';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    // url: 'https://httpbin.org/post',
    url: 'http://d3507f4a.ngrok.io/wanted/upload',
    acceptedFiles: 'image/*',
    createImageThumbnails: true,
    method: "post"
};

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        DropzoneModule,
        CoreModule.forRoot({theme: 'default'}),
        LoaderModule
    ],
    declarations: [
        AppComponent,
        CitoComponent,
        CitoDetectComponent
    ],
    providers: [
        CitoService,
        {
            provide: DROPZONE_CONFIG,
            useValue: DEFAULT_DROPZONE_CONFIG
        },
        ImageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

