import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { WorkSphereAvantagesComponent } from './work-sphere-avantages/work-sphere-avantages.component';
import { EssentialToolsComponent } from './essential-tools/essential-tools.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    WorkSphereAvantagesComponent,
    EssentialToolsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
