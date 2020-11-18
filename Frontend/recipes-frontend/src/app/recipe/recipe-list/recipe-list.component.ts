import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/IRecipe.interface';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Array<IRecipe>;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {

    this.recipeService.getAllRecipes().subscribe(
      data=> {
        this.recipes=data;
        console.log(data);
      }, error=> {
        console.log(error);
      }
    )
  }

}
