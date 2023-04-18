import { Planet } from './../models/index';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'saw-resume-planets',
  templateUrl: './resume-planets.component.html',
  styleUrls: ['./resume-planets.component.css'],
})
export class ResumePlanetsComponent {
  // @Input

  private _planet !: Planet;

  @Output() deletePlanet = new EventEmitter<Planet>();

  @Input('maplanet') set planet(planet: Planet) {
    if (!planet) {
      throw new Error('Planet is required');
    }
    this._planet = planet;
  }
  get planet(): Planet {
    return this._planet;
  }

  onClick(): void {
    this.deletePlanet.emit(this.planet);
  }
}
