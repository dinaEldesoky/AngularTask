import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { LoginComponent } from './components/login/login.component';
import { MovieListsComponent } from './components/movie-lists/movie-lists.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignComponent } from './components/sign/sign.component';
import { AuthService } from './services/guard/auth.service';


const routes: Routes = [
  { path: 'Home', component: MovieListsComponent },
  { path: 'Sign', component: SignComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Favorite', component: FavoriteComponent, canActivate: [AuthService] },

  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
