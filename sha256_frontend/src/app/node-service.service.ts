import { HttpClient } from  '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodeServiceService {

  private url = 'http://localhost:4100/';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }
}
