import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  @Input() title:string;
  @Input() ingredients:string;
  @Input() recipe;


  constructor(private localStorageService:LocalStorageService) { }

  ngOnInit() {
  }

  onFormSubmit(e){
    e.preventDefault();

    if(this.title !== "" && this.ingredients !== ""){
      let splitIngredients = this.ingredients.split(",");
      let ingredientsArrNew = splitIngredients.map(function(val,i){
        return val.trim();
      });

      let _recipe = {title: this.title, ingredients: ingredientsArrNew};

      this.localStorageService.editRecipe(this.recipe, _recipe);

      this.closeModal();
    }
  }

  closeModal(){
    this.localStorageService.showEditModal = false;
  }

}
