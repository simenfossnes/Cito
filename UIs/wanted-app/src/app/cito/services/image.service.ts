import { Observable } from "rxjs";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ImageService {

    constructor(private http: HttpClient) {}


    public uploadImage(image: File): Observable<Object> {
        const formData = new FormData();

        formData.append('image', image);

        return this.http.post("http://637fe123.ngrok.io/wanted/upload", formData);
        // return this.http.post('/api/v1/image-upload', formData);
    }
}