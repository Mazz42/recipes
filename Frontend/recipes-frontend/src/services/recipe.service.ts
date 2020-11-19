import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import {Observable} from "rxjs";
import { IRecipe } from 'src/app/IRecipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url: string;
  myModel: IRecipe;
  constructor(private http:HttpClient) {
    this.url = "http://localhost:53144/api/Recipes/";
    this.myModel=null;
   }

  getAllRecipes(): Observable<IRecipe[]> {
    return this.http.get(this.url).pipe(
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

  public deleteRecipe(id) {
    let endPoints = id;
    this.http.delete(this.url + endPoints).subscribe(data => {
      console.log(data);
    });
  }


  public addPost(postData: Object) {
    this.http.post(this.url, postData).subscribe(data => {
      console.log(data);
    });
  }

  public updatePost(postData: Object) {
    this.http.put(this.url, postData).subscribe(data => {
      console.log(data);
    });
  }

  public getPostById(id){
    this.http.get<IRecipe>(this.url + id).subscribe( result =>
      {
          console.log(result);
          this.myModel = result;
      });
      console.log(this.myModel);
      return this.myModel;

  }

  // public get(id): Observable<any> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }

  // public getPostById(id): void {
  //   this.myModel.get(id)
  //     .subscribe(
  //       data => {
  //         this.currentTutorial = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

    };



