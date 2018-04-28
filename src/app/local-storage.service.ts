import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  recipes:any[] = [];
  localStorageAvailable:boolean = true;
  recipeStorageName:string = "recipe-box.recipes";

  showModal = false;
  showEditModal = false;

  editTitle:string = "Hi";
  editIngredients:string = "test,test";
  editRecipeOld:any = {title: "test"};

  constructor() {
    if(!this.storageAvailable()){
      this.localStorageAvailable = false;
    }
    this.getRecipes();
  }

  getRecipes(){
    if(!this.localStorageAvailable){
      return false;
    }

    if(localStorage.getItem(this.recipeStorageName)){
      this.recipes = JSON.parse(localStorage.getItem(this.recipeStorageName));
    }
  }

  storageAvailable(){
    try{
      let x = "__storage_test__";
      localStorage.setItem(x,x);
      localStorage.removeItem(x);
      return true;
    }catch(e){
      return false;
    }
  }

  addRecipe(recipe){
    this.recipes.push(recipe);

    localStorage.setItem(this.recipeStorageName, JSON.stringify(this.recipes));
  }

  removeRecipe(recipe){
    this.recipes = this.recipes.filter(function(item){
      return recipe.title !== item.title;
    });

    localStorage.setItem(this.recipeStorageName, JSON.stringify(this.recipes));
  }

  editRecipe(oldRecipe, newRecipe){
    console.log(newRecipe);
    let index = this.recipes.findIndex(function(item){
      for(let i = 0; i < item.ingredients.length; i++){
        if(item.ingredients[i] !== oldRecipe.ingredients[i]){
          return false;
        }
      }
      return item.title === oldRecipe.title;
    });

    this.recipes[index] = newRecipe;

    localStorage.setItem(this.recipeStorageName, JSON.stringify(this.recipes));
  }

}
