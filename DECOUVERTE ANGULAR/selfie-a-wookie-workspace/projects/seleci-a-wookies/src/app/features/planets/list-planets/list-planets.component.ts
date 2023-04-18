import { Component } from '@angular/core';
import { Planet, Planets } from '../models';

@Component({
  selector: 'saw-list-planets',
  templateUrl: './list-planets.component.html',
  styleUrls: ['./list-planets.component.css']
})
export class ListPlanetsComponent {
  planets: Planets = [{
    name: 'Tatooine',
    id: 1
  },
  {
    name: 'Alderaan',
    id: 2
  }];

  add(): void {
    this.planets.push({
      name: 'Yavin IV',
      id: 3
    });

    this.planets = [...this.planets];
  }

  remove(): void {
    this.planets = [...this.planets];
    this.planets.pop();
  }

  deleteOnPlanet(planet: Planet): void {
    this.planets = this.planets.filter(p => p.id !== planet.id);
  }
}
