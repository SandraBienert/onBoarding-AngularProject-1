import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


export interface iStep {
  title: string;
  description: string;
  img: string;
  bgcolor: string;
}

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss'],
})
export class EscenaComponent implements OnInit {
  @Input() steps: iStep[] = [];
  currentStepIndex = 0;

  ngOnInit(): void {
    // Assegura't que hi ha almenys un pas
    if (this.steps.length > 0) {
      this.currentStepIndex = 0;
    }
  }

  get step(): iStep {
    return this.steps[this.currentStepIndex];
  }

  nextStep(): void {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
    }
  }

  prevStep(): void {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
    }
  }
  selectStep(index: number): void {
    this.currentStepIndex = index;
  }

}


