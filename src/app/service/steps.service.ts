import { Injectable } from '@angular/core';
import { iStep } from '../escena/escena.component';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  steps: iStep[] = [
    {
      title: 'Dedica moltes hores',
      description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
      img: 'path/to/image1.jpg',
      bgcolor: '#FFFFFF'
    },
    {
      title: 'Programa projectes propis',
      description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      img: 'path/to/image2.jpg',
      bgcolor: '#FFFFFF'
    },
    {
      title: 'Procura descansar',
      description: 'Descansar bé i desconnectar són vitals. D\'aquesta manera reduiràs l\'estrès i l\'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.',
      img: 'path/to/image3.jpg',
      bgcolor: '#FFFFFF'
    }
  ];

  constructor() {}

  getSteps(): iStep[] {
    return this.steps;
  }
}

