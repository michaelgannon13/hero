import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // we will be subscribing to an observable since the response might change
  // the observable is of type Hero array
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  constructor() { }
}
