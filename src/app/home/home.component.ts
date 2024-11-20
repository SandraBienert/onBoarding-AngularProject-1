import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscenaComponent } from '../escena/escena.component';
import { StepsService } from '../service/steps.service';
import { iStep } from '../escena/escena.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EscenaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  steps: iStep[] = [];

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
  }
}
