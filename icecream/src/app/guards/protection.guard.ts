import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const protectionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  console.log("Pase por el guard");

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    }
  }
  return false;
};
