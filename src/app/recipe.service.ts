import { Injectable } from '@angular/core';
import { Recipe } from './models/recipe';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  constructor() {
  }

  getRecipes(): Recipe[] {
    const recipes: Recipe[] = [ {
      id:             0,
      title:          'Very tasty burger',
      servings:       1,
      readyInMinutes: 75,
      imageUrls:      [ 'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg' ],
    }, {
      id:             1,
      title:          'Italian Spaghetti and Meatballs',
      servings:       6,
      readyInMinutes: 30,
      imageUrls:      [ 'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps5941_GBS1554510D37.jpg' ],
    }, {
      id:             2,
      title:          'Sushi',
      servings:       1,
      readyInMinutes: 45,
      imageUrls:      [ 'https://images.summitmedia-digital.com/yummyph/images/june_2015/maki-645.jpg' ],
    }, {
      id:             3,
      title:          'Chicken Pad Thai',
      servings:       2,
      readyInMinutes: 15,
      imageUrls:      [ 'https://www.spendwithpennies.com/wp-content/uploads/2017/06/chicken-pad-thai-4.jpg' ],
    }, {
      id:             4,
      title:          'Chicken Tikka Masala',
      servings:       1,
      readyInMinutes: 195,
      imageUrls:      [ 'https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-2-683x1024.jpg' ],
    },
    ];

    return recipes;
  }
}
