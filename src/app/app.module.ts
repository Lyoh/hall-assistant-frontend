import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Module Imports
import { MaterializeModule } from 'angular2-materialize';

// Service Imports
import { SpeechsService } from './speechs/speechs.service';

// Component Imports
import { AppComponent } from './app.component';
import { SpeechsComponent } from './speechs/speechs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [
    SpeechsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
