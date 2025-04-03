import { Component } from '@angular/core';
import { CARDS_WORKSPHERE } from '../../../shared/data/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-sphere-avantages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-sphere-avantages.component.html',
  styleUrl: './work-sphere-avantages.component.css'
})
export class WorkSphereAvantagesComponent {
  workSphere = CARDS_WORKSPHERE;
}
