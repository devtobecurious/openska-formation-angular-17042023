import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<ApiResult> {
    return this.http.get<ApiResult>('https://swapi.dev/api/planets/');
  }
}
