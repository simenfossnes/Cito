import {Component, OnInit, ViewChild, ComponentRef, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import { interval, Subscription } from 'rxjs';

import {Cito} from './models/cito';
import {CitoService} from './services/cito.service';

import { ImageService } from './services/image.service';
import { directiveDef } from '@angular/core/src/view';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Detection } from './models/detection';

@Component({
    moduleId: module.id,
    selector: 'cito-detect',
    templateUrl: 'cito-detect.component.html',
    styleUrls: [ './cito-detect.component.css' ]
})
export class CitoDetectComponent implements OnInit, OnDestroy {
    cito: Cito;
    private mLoaded: boolean;;
    private mDetections: Detection[];

    constructor(
        private mCitoService: CitoService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            if (+params['id']) {
                this.mCitoService.getCito(+params['id']).subscribe(data => {
                    this.cito = data;
                    console.log(data);
                    var context = this;
                    var f = function() {
                        context.mCitoService.getDetectionResult().subscribe((detections: any) => {
                            if (detections != null) {
                                context.mDetections = detections;
                            } else {
                                setTimeout(f, 1000);
                            }
                        });
                    }
                    f();

                });
            }
        });
    }

    ngOnDestroy(): void {
    }

}
