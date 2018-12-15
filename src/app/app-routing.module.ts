import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const routes: Routes = [
  {path: 'recipes', component: RecipeListComponent},
  { path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
