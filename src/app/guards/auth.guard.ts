import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../app.component';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(environment.loggedIn)
    return true;
  else
    router.navigate(['login']);
    return false;
};
