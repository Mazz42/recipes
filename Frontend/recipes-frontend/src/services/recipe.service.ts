import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import {Observable} from "rxjs";
import { IRecipe } from 'src/app/IRecipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { }

  getAllRecipes(): Observable<IRecipe[]> {
    return this.http.get('data/recipes.json').pipe(
      map(data => {
        const recipesArray: Array<IRecipe> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            recipesArray.push(data[id]);
          }
        }
        return recipesArray;
      })
    )
  }
}
