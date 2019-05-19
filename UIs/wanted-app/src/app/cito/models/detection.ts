export class Detection {
    private title: String;
    private lat: String;
    private lng: String;
    private time: String;
    private photoUrl: number;

    constructor (title: String,
        lat: String, lng: String, time: String, photoUrl: number) {
        this.title = title;
        this.lat = lat;
        this.lng = lng;
        this.time = time;
        this.photoUrl = photoUrl;
    }
}