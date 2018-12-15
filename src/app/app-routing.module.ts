import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlidesComponent } from './about/slides.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const routes: Routes = [
  {path: 'slides', component: SlidesComponent},
  {path: 'recipes', component: RecipeListComponent},
  { path: '',
    redirectTo: '/slides',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
