import { Component } from '@angular/core';

@Component({
  selector: 'app-text-area-input',
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.css'],
})
export class TextAreaInputComponent {
  load(input_val: any){
    console.log(input_val);
  }
}
