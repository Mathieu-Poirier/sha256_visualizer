import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { TitleComponent } from './title/title.component';
import { TextAreaInputComponent } from './text-area-input/text-area-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TextAreaInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
