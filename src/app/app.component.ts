import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { WorkSphereAvantagesComponent } from './components/home/work-sphere-avantages/work-sphere-avantages.component';
import { EssentialToolsComponent } from './components/home/essential-tools/essential-tools.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'kadouri-nabil-examen-front';
}
