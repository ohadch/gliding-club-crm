import { Injectable } from '@angular/core';


type ValueOf<T> = T[keyof T];

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public enumStringValuesIterator<T>(_enum: T): ValueOf<T>[] {
    return Object.values(_enum).filter(value => typeof value === "string") as ValueOf<T>[];
  }
}
