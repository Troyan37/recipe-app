import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipe","Description","https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg"),
    new Recipe("Test Recipe 2","Description 2","https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg")
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }

}
