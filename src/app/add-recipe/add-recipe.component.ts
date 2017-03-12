import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  _recipe:any;
  title:string = "";
  ingredients:string = "";
  ingredientsArr:any[];

  constructor(private localStorageService:LocalStorageService) { }

  ngOnInit() {
  }

  onFormSubmit(e){
    e.preventDefault();

    if(this.title !== "" && this.ingredients !== ""){
      let splitIngredients = this.ingredients.split(",");
      this.ingredientsArr = splitIngredients.map(function(val,i){
        return val.trim();
      });

      this._recipe = {title: this.title, ingredients: this.ingredientsArr};
      this.ingredients = "";
      this.title = "";

      this.localStorageService.addRecipe(this._recipe);

      this.closeModal();
    }
  }

  closeModal(){
    this.localStorageService.showModal = false;
  }
}
