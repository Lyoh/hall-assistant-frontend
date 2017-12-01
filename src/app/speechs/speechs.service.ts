import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Speech } from './shared/speech.model';

// rxjs extensions
import 'rxjs/add/Observable/of';

const SPEECHS: Array<Speech> = [
  new Speech(1, 'Quão bem conhece a Deus?', ['Fé', 'Espiritualidade']),
  new Speech(2, 'Será um dos sobreviventes dos ultimos dias?', ['Últimos Dias', 'Julgamento de Deus']),
  new Speech(3, 'Sirvamos com a organização unificada de Jeová', ['Religião', 'Adoração']),
  new Speech(4, 'Evidencias de Deus no mundo que nos rodeia', ['Bíblia', 'Deus']),
  new Speech(5, 'Vida familiar que anima o coração', ['Familia', 'Jovens']),
  new Speech(6, 'O Diluvio dos dias de Noé tem significado para nós', ['Últimos Dias', 'Julgamento de Deus']),
  new Speech(7, 'Misericordia, qualidade dominante dos verdadeiros cristãos', ['Qualidades', 'Padrões Cristãos']),
  new Speech(8, 'Viva, não para si mesmo, mas para fazer a vontade de Deus', ['Religião', 'Adoração']),
  new Speech(9, 'Nunca fique obtuso no ouvir', ['Fé', 'Espiritualidade']),
  new Speech(10, 'Comportemo-nos honestamente em todas as ocasiões', ['Qualidades', 'Padrões Cristãos']),
  new Speech(11, 'Não fazemos parte do mundo - em imitação de Cristo', ['Mundo, não fazer parte do']),
  new Speech(12, 'O respeito pela autoridade serve de proteção', ['Qualidades', 'Padrões Cristãos'])
];

@Injectable()
export class SpeechsService {

  constructor() { }

  public getAll(): Observable<Speech[]> {
    return Observable.of(SPEECHS);
  }

}
