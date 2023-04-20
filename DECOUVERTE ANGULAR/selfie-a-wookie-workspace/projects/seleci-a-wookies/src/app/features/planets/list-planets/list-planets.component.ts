import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ApiResult, Planet, Planets } from '../models';

@Component({
  selector: 'saw-list-planets',
  templateUrl: './list-planets.component.html',
  styleUrls: ['./list-planets.component.css']
})
export class ListPlanetsComponent implements OnInit {
  planets$: Observable<Planets>;

  /**
   *
   */
  constructor(private readonly httpClient: HttpClient) {
    this.planets$ = this.httpClient.get<ApiResult>('https://swapi.dev/api/planets/').pipe(
      tap(item => console.log('avant', item)),
      map((apiResult: ApiResult) => {
        const tableauResult = apiResult.results.map(planet => {
          return {
            name: planet.name,
            id: 1
          };
        });

        return tableauResult;
      }),
      tap(item => console.log('apres', item)),
    );
  }
  ngOnInit(): void {
    this.planets$.subscribe(planets => {
      this.planets = planets;
    });
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
