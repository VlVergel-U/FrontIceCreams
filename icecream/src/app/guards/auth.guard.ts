import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
//   const router = inject(Router);
//   const token = localStorage.getItem('token');

//   if (token && state.url === '/') {
//     localStorage.removeItem('token');
//     router.navigate(['/home']);
//     return false;
//   }

  return true;
};
