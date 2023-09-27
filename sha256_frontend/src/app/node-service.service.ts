import { HttpClient } from  '@angular/common/http';
import { Injectable } from '@angular/core';
import { TextAreaInputComponent } from './text-area-input/text-area-input.component';

@Injectable({
  providedIn: 'root'
})
export class NodeServiceService {

  private url = 'http://localhost:4100/';

  constructor(
    private http: HttpClient,
    private textarea : TextAreaInputComponent
    ) { }

  getPosts() {
    return this.http.get(this.url);
  }

}
