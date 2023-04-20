import { inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { LoggerService } from '../../../shared/tools/logger.service';
import { ApiResult } from '../models';
import { PlanetService } from './planet.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetBusinessService {
  private service = inject(PlanetService);
  private readonly logger = inject(LoggerService);

  getAll() {
    return this.service.getAll().pipe(
      tap(item => this.logger.log(item)),
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
}
