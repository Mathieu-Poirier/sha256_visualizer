import { Component, OnInit } from '@angular/core';
import { NodeServiceService } from './node-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sha256_frontend';
  posts : any;
  
  constructor(private httpService : NodeServiceService){

  }

  ngOnInit() {
    this.httpService.getPosts().subscribe(response => {
      console.log('Response from API is: ', response)
    })
  }
}
