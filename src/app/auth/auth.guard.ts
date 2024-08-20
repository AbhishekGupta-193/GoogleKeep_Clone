import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  let _router = inject(Router);
  
  if (localStorage.getItem('id')) {
    alert("Welcome to Dashboard!");
    return true;
  }
  else {
    alert("Not Authenticated User!");
    _router.navigate(['']);
    return false;
  }
  
};
