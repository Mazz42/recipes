import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { RecipeCardComponent } from './recipe/recipe-card/recipe-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeService } from 'src/services/recipe.service';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';

const appRoutes: Routes = [
  {path: '', component: RecipeListComponent},
  {path: 'add-recipe', component: AddRecipeComponent},
  {path: 'recipe-detail/:id', component: RecipeDetailComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    RecipeListComponent,
    NavBarComponent,
    RecipeDetailComponent,
    AddRecipeComponent,
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
