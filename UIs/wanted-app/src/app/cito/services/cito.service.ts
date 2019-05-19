import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cito } from '../models/cito';
import { Observable, Observer } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Detection } from '../models/detection';
import { detectWTF } from '@angular/core/src/profile/wtf_impl';

@Injectable()
export class CitoService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://685048fb.ngrok.io';

    constructor(private http: HttpClient) {
    }

    getCito(id: number): Observable<Cito> {
        const url = `${this.url}/${id}`;

        // create observable
        return Observable.create( (observer: Observer<JSON>) => {
            /* do things with observer */
            observer.next(JSON.parse(JSON.stringify(new Cito(12))));
            observer.complete();
        });

        // return this.http.get<Cito>(url)
        //                 .pipe(catchError(this.handleError));
    };

    getDetectionResult(): Observable<Detection[]> {
        console.log('getDetectionResult');
        const url = `${this.url}/get_data`;

        // create observable
        // return Observable.create( (observer: Observer<JSON>) => {
        //     /* do things with observer */
        //     var detections;
        //     detections = [new Detection("Title 1", "lat", "lng", "21:30", 1),
        //         new Detection("Title 1", "lat", "lng", "21:30", 1),
        //         new Detection("Title 1", "lat", "lng", "21:30", 1)
        //     ];
            
        //     observer.next(JSON.parse(JSON.stringify(detections)));

        //     observer.complete();
        // });

        return this.http.get<Detection[]>(url)
                .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Damn, there was an error', error);
        return Promise.reject(error.message || error);
    }
}

