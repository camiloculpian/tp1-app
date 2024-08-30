import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';
import { HomePage } from './pages/home/home.page';
import { ProfilePage } from './pages/profile/profile.page';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./layouts/main-content/main-content.component').then((m) => m.MainContentComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        title: 'Home',
        component: HomePage,
      },
      {
        path: 'profile',
        title: 'Home',
        component: ProfilePage,
      },
    ]
  },
  {
    path: '',
    redirectTo: 'main/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage),
    canActivate: [loginGuard],
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
];
