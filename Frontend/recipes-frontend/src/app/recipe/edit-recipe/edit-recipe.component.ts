import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/IRecipe.interface';
import { RecipeService } from 'src/services/recipe.service';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {

  addRecipeForm: FormGroup;

  public recipe: IRecipe;
  public recipeId: number;

  constructor( private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.addRecipeForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
    });

    this.recipeId = Number(this.route.snapshot.params['id']);
    this.recipe = this.recipeService.getPostById(this.recipeId);
    console.log(JSON.stringify(this.recipe));

  }

}
