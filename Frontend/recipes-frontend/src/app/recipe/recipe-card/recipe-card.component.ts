import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/IRecipe.interface';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  @Input() recipe : IRecipe
}
