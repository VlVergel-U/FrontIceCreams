import { HttpEvent, HttpHandlerFn, HttpRequest, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';

export const HttpErrorInterceptorService: HttpInterceptorFn = (
  request: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  console.log('Pase por el interceptor de HTTP');

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = setError(error);
      
      if (error.status === 404 || error.status === 400) {
        errorMessage = error.error?.message
      } else if (error.status === 422 && error.error.errors) {
        errorMessage = error.error.errors.map((err: any) => `• ${err}`).join('<br>');
      }

      console.log(error);
      showErrorAlert(errorMessage);
      return throwError(() => new Error(errorMessage));
    })
  );
};

function setError(error: HttpErrorResponse): string {
  let errorMessage = 'An unknown error occurred';
  if (error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    if (error.status !== 0) {
      errorMessage = error.error.errorMessage || `Error: ${error.status} - ${error.statusText}`;
    } else {
      errorMessage = 'Cannot connect to the server. Please check your network connection.';
    }
  }
  return errorMessage;
}

function showErrorAlert(message: string): void {
    Swal.fire({
      html: `
          <p style="font-size: 18px; font-weight: bold; font-family: 'Poppins', sans-serif;">Oops, algo salió mal...</p>
        <div style="text-align: center; font-family: 'Poppins', sans-serif; color: #ff6b6b;">
          <img src="https://media.tenor.com/6vDf_boxE9QAAAAj/summer-sad.gif" alt="Ice Cream" style="width: 80px; margin-bottom: 20px;"/>
  
          <p style="font-size: 16px; color: #333;">${message}</p>
        </div>
      `,
      confirmButtonText: '<b>¡Lo intentaré de nuevo!</b>',
      confirmButtonColor: '#db99b4',
      background: 'white',
      customClass: {
        container: 'sweet-alert-container',
        popup: 'sweet-alert-popup',
      },
    });
  }