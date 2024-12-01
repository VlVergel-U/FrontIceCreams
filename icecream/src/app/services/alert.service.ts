import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  error(title: string, text: string, textButton: string, confirmColorButton: string): void {
    Swal.fire({
        html:  `
        <p style="font-size: 18px; font-weight: bold; font-family: 'Poppins', sans-serif;">${title}</p>
      <div style="text-align: center; font-family: 'Poppins', sans-serif; color: #ff6b6b;">
        <img src="https://media.tenor.com/6vDf_boxE9QAAAAi/summer-sad.gif" alt="Image" style="width: 80px; margin-bottom: 20px"/>
    
        <p style="font-size: 16px; color: #333;">${text}</p>
      </div>
    `,
      confirmButtonText: `<b>${textButton}</b>`,
      confirmButtonColor: confirmColorButton,
      background: 'white',
      customClass: {
        container: 'sweet-alert-container',
        popup: 'sweet-alert-popup',
      },
    });
  }

  success(title: string, text: string, textButton: string, confirmColorButton: string): void {
    Swal.fire({
        html:  `
        <p style="font-size: 18px; font-weight: bold; font-family: 'Poppins', sans-serif;">${title}</p>
      <div style="text-align: center; font-family: 'Poppins', sans-serif; color: #ff6b6b;">
        <img src="https://media.tenor.com/Lex9ytJH2DQAAAAi/happy-summer.gif" alt="Image" style="width: 80px; margin-bottom: 20px"/>
    
        <p style="font-size: 16px; color: #333;">${text}</p>
      </div>
    `,
      confirmButtonText: `<b>${textButton}</b>`,
      confirmButtonColor: confirmColorButton,
      background: 'white',
      customClass: {
        container: 'sweet-alert-container',
        popup: 'sweet-alert-popup',
      },
    });
  }

  warning(title: string, text: string, textButton: string, confirmColorButton: string): void {
    Swal.fire({
        html:  `
        <p style="font-size: 18px; font-weight: bold; font-family: 'Poppins', sans-serif;">${title}</p>
      <div style="text-align: center; font-family: 'Poppins', sans-serif; color: #ff6b6b;">
        <img src="https://media.tenor.com/LPykQ8QDz7QAAAAi/happy-summer.gif" alt="Image" style="width: 80px; margin-bottom: 20px"/>
    
        <p style="font-size: 16px; color: #333;">${text}</p>
      </div>
    `,
      confirmButtonText: `<b>${textButton}</b>`,
      confirmButtonColor: confirmColorButton,
      background: 'white',
      customClass: {
        container: 'sweet-alert-container',
        popup: 'sweet-alert-popup',
      },
    });
  }



}
