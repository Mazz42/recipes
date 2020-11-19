import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RecipeService } from 'src/services/recipe.service';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

  addRecipeForm: FormGroup;
  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit() {
    this.addRecipeForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.recipeService.addPost(this.addRecipeForm.value);
    this.router.navigate(['']);
  }
}
