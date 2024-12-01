import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
export const apiInterceptor: HttpInterceptorFn = (req, next) => {

  console.log("Pase por el interceptor");

  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  
  if (req.url.includes("/api") && token) {
    const petitionClone = req.clone({
      setHeaders : {
        Authorization : `Bearer ${token}`
      }
    });
    return next(petitionClone).pipe(catchError(handleError));
  }
  

 return next(req).pipe(catchError(handleError));

};

const handleError = (error : HttpErrorResponse )=>{
  console.log("Genero un error");
  console.log(error);

  return throwError(()=>"error")
}
