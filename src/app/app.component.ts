import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private localStorageService:LocalStorageService){}

  ngOnInit(){

  }

  openModal(){
    this.localStorageService.showModal = true;
  }

  removeRecipe(recipe){
    this.localStorageService.removeRecipe(recipe);
  }

  editRecipe(recipe){
    this.localStorageService.showEditModal = true;

    let ingredients = recipe.ingredients.join(", ");

    this.localStorageService.editRecipeOld = recipe;
    this.localStorageService.editTitle = recipe.title;
    this.localStorageService.editIngredients = ingredients;
  }

}
