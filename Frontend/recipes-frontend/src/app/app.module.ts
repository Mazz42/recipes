import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { RecipeCardComponent } from './recipe/recipe-card/recipe-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeService } from 'src/services/recipe.service';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { UserLoginComponent } from './user/user-login/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register/user-register.component';
import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';

const appRoutes: Routes = [
  {path: '', component: RecipeListComponent},
  {path: 'add-recipe', component: AddRecipeComponent},
  {path: 'recipe-detail/:id', component: RecipeDetailComponent},
  {path: 'user/login', component: UserLoginComponent},
  {path: 'user/register', component: UserRegisterComponent},
  {path: 'edit-recipe/:id', component: EditRecipeComponent},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    RecipeListComponent,
    NavBarComponent,
    RecipeDetailComponent,
    AddRecipeComponent,
    NotFoundComponent,
    UserLoginComponent,
    UserRegisterComponent,
    EditRecipeComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
