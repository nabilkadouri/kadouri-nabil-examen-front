import { Component } from '@angular/core';
import { CARDS_TOOLS } from '../../../shared/data/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-essential-tools',
  imports: [CommonModule],
  templateUrl: './essential-tools.component.html',
  styleUrl: './essential-tools.component.css'
})
export class EssentialToolsComponent {
  cards = CARDS_TOOLS;
}
