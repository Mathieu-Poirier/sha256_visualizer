import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area-input',
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.css']
})
export class TextAreaInputComponent {
  onPress(){
    return console.log('Button');
  }
}
