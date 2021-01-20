import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipesSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Test Recipe",
            "Description",
            "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg",
         [
             new Ingredient('Meat', 1),
             new Ingredient('French Fries', 20)
         ]),
        new Recipe(
            "Test Recipe 2",
            "Description 2",
            "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg",
             [
                 new Ingredient('Buns', 1),
                 new Ingredient('Meat', 1)
             ])
      ];


    getRecipes() {
        return this.recipes.slice();
    }


}