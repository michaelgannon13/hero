import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // tell the function the 'Type' of the data it will be handling
  // Return the HEROES array of heroes
  getHeroes(): Hero[]{
    return HEROES;
  }

  constructor() { }
}
