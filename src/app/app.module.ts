import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Module Imports
import { MaterializeModule } from 'angular2-materialize';

// Component Imports
import { AppComponent } from './app.component';
import { SpeechsComponent } from './speechs/speechs.component';


@NgModule({
  declarations: [
    AppComponent,
    SpeechsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
