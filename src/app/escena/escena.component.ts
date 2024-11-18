import { Component, Input } from '@angular/core';
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
  styleUrl: './escena.component.css'
})

export class EscenaComponent {
@Input() steps: iStep[] = [];
}

