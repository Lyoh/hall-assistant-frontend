import { Component, OnInit } from '@angular/core';

import { Speech } from './shared/speech.model';
import { SpeechsService } from './speechs.service';

@Component({
  selector: 'app-speechs',
  templateUrl: './speechs.component.html',
  styleUrls: ['./speechs.component.css']
})
export class SpeechsComponent implements OnInit {
  public speechs: Array<Speech>;
  constructor(private speechService: SpeechsService) {
    this.speechs = null;
   }

  ngOnInit() {
    this.speechService.getAll()
      .subscribe(
        (speechs) => this.speechs = speechs,
        () => this.handlesError()
      );
  }

  private handlesError() {
    console.log('Tratar o erro aqui');
  }

}
