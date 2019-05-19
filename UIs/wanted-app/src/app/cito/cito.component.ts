import {Component, OnInit, ViewChild, ComponentRef} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Cito} from './models/cito';
import {CitoService} from './services/cito.service';

import { DropzoneComponent , DropzoneDirective,
    DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ImageService } from './services/image.service';
import { directiveDef } from '@angular/core/src/view';
import { routerNgProbeToken } from '@angular/router/src/router_module';

class ImageSnippet {
    constructor(public src: string, public file: File) {}
}

@Component({
    moduleId: module.id,
    selector: 'cito',
    templateUrl: 'cito.component.html',
    styleUrls: [ './cito.component.css' ]
})
export class CitoComponent implements OnInit {
    cito: Cito;
    public type: string = 'component';
    private mFile: File;

    public config: DropzoneConfigInterface = {
        clickable: true,
        maxFiles: 1,
        autoReset: null,
        errorReset: null,
        cancelReset: null
    };

    @ViewChild(DropzoneComponent) componentRef?: DropzoneComponent;
    @ViewChild(DropzoneDirective) directiveRef?: DropzoneDirective;

    constructor(
        private citoService: CitoService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private imageService: ImageService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (+params['id']) {
                this.citoService.getCito(+params['id']).subscribe(data => {
                    this.cito = data;
                    console.log(data);
                });
            }
        });
    }

    getCito(id: number): void {

    }

    public resetDropzoneUploads(): void {
        console.log('resetDropzoneUploads');
        if (this.type === 'directive' && this.directiveRef) {
            this.directiveRef.reset();
        } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
            this.componentRef.directiveRef.reset();
        }
    }

    public onUploadInit(args: any): void {
        console.log('onUploadInit:', args);
    }

    public onUploadError(args: any): void {
        console.log('onUploadError:', args);
        console.log(typeof args[0]);
        this.mFile = args[0];
    }

    public onUploadSuccess(args: any): void {
        console.log('onUploadSuccess:', args);
    }

    public onAddedFile(args: any): void {
        console.log('onAddedFile:', args);
    }

    selectedFile: ImageSnippet;
    processFile() {
        console.log("processFile");
        // const file: File = imageInput.files[0];
        const file: File = this.mFile;
        const reader = new FileReader();
    
        reader.addEventListener('load', (event: any) => {
    
          this.selectedFile = new ImageSnippet(event.target.result, file);
    
          this.imageService.uploadImage(this.selectedFile.file).subscribe(
            (res) => {
                console.log("success");
                this.route.params.subscribe(params => {
                    if (+params['id']) {
                        this.router.navigate(['/cito/'+params['id']+'/detect']);
                    }
                });
            },
            (err: any) => {
                console.log("error", err);
                // this.router.navigate(['/citos/12/detect']);
                this.route.params.subscribe(params => {
                    console.log('reroute');
                    if (+params['id']) {
                        this.router.navigate(['/citos/'+params['id']+'/detect']);
                    }
                });
            });
        });
    
        reader.readAsDataURL(file);
    }

}
