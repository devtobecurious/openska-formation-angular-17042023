import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { LoggerService } from '../../../shared/tools/logger.service';
import { ApiResult, Planet, Planets } from '../models';
import { PlanetBusinessService } from '../services/planet-business.service';

@Component({
  selector: 'saw-list-planets',
  templateUrl: './list-planets.component.html',
  styleUrls: ['./list-planets.component.css']
})
export class ListPlanetsComponent implements OnInit {
  planets$ = inject(PlanetBusinessService).getAll();
  route = inject(ActivatedRoute);

  /**
   *
   */
  // constructor(private readonly httpClient: HttpClient,
  //   private readonly logger: LoggerService) {
  //   this.planets$ =
  // }
  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   params['id']
    // });
    this.route.snapshot.params['id'];
    // this.planets$.subscribe(planets => {
    //   this.planets = planets;
    // });
  }

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

  }

  remove(): void {
    this.planets.pop();
  }

  deleteOnPlanet(planet: Planet): void {
    this.planets = this.planets.filter(p => p.id !== planet.id);
  }
}
