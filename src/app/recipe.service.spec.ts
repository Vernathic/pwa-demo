import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipe.service';

describe('RecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeService = TestBed.get(RecipeService);
    expect(service).toBeTruthy();
  });

  it('should get the recipes from the API', () => {
    const service: RecipeService = TestBed.get(RecipeService);
    // mock API
    // prep query

    // const results = service.getRecipes(query);

  });
});
