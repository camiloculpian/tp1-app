import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../app.component';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  console.log('export const loginGuard: CanActivateFn = (route, state)')
  if(!environment.loggedIn)
    return true;
  else
    router.navigate(['home']);
    return false;
};
