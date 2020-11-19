import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  //id extraction
  public recipeId: number;
  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeId = Number(this.route.snapshot.params['id']);

  }

  onNext() {
    this.recipeId += 1;
    this.router.navigate(['recipe-detail/' + this.recipeId]);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.recipeId);
    this.router.navigate(['']);
  }
}
