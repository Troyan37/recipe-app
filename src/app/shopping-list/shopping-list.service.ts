import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    shoppingItemAdded = new EventEmitter<Ingredient[]>();

    private ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomates', 4)
      ];

    addIngredient(newShoppingItem : Ingredient){
        this.ingredients.push(newShoppingItem);
        this.shoppingItemAdded.emit(this.ingredients);
    }

    addIngredients(newShoppingItems : Ingredient[]) {

        // newShoppingItems.forEach(
        //     (item)=>{
        //         this.addIngredient(item);
        //     }
        // )
        
        this.ingredients.push(...newShoppingItems);
        this.shoppingItemAdded.emit(this.ingredients);

    }

    getIngredients() {
        return this.ingredients.slice();
    }
    

}