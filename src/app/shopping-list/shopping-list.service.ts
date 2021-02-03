import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    shoppingItemAdded = new Subject<Ingredient[]>();

    private ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomates', 4)
      ];

    addIngredient(newShoppingItem : Ingredient){
        this.ingredients.push(newShoppingItem);
        this.shoppingItemAdded.next(this.ingredients);
    }

    addIngredients(newShoppingItems : Ingredient[]) {

        // newShoppingItems.forEach(
        //     (item)=>{
        //         this.addIngredient(item);
        //     }
        // )
        
        this.ingredients.push(...newShoppingItems);
        this.shoppingItemAdded.next(this.ingredients);

    }

    getIngredients() {
        return this.ingredients.slice();
    }
    

}