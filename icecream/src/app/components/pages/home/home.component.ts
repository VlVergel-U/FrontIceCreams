import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AlertService } from '../../../services/alert.service';
import { icecream } from '../../../models/ice_cream.model';
import { IceCreamService } from '../../../services/icecream.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  iceCreams: icecream[] = [];
  selectedIceCream: icecream = { img: '', flavor: '', price: 0, company: '', type: '' };
  iceCreamData : icecream = { img: '', flavor: '', price: 0, company: '', type: '' };

  constructor(private alert: AlertService, private iceCreamService: IceCreamService, private router: Router) {}

  ngOnInit() {
    this.loadIceCreams();
  }

  loadIceCreams() {
    this.iceCreamService.getAllIceCreams().subscribe({
      next: (data) => {
        this.iceCreams = data;
      },
    });
  }
  
  addIceCream(form: NgForm) {
    this.iceCreamData = form.value;
    console.log('Datos del helado a enviar:', this.iceCreamData);
    this.iceCreamService.createIceCream(this.iceCreamData).subscribe({
      next: (success) => {
          this.alert.success('¡Éxito!', 'Helado agregado correctamente.', 'OK', '#db99b4');
          this.loadIceCreams();
          form.reset();
      },
    });
  }

  editIceCream(id: string) {
    this.iceCreamService.getOneIceCream(id).subscribe({
      next: (data) => {
        this.selectedIceCream = {
          ...data,
          flavor: data.flavor.toLowerCase(),
          company: data.company.toLowerCase(),
          type: data.type.toLowerCase(),
        };
      },
      error: () => {
        this.alert.error('Error', 'No se pudo cargar el helado.', 'OK', '#db99b4');
      }
    });
  }

  updateIceCream() {
    if (!this.selectedIceCream.id) {
      this.alert.error('Error', 'ID no válido.', 'OK', '#db99b4');
      return;
    }
  
    this.iceCreamService.modifyIceCream(this.selectedIceCream.id, this.selectedIceCream).subscribe({
      next: (success) => {
        this.loadIceCreams();
        this.alert.success('¡Éxito!', 'Helado actualizado correctamente.', 'OK', '#db99b4');
        this.selectedIceCream = { img: '', flavor: '', price: 0, company: '', type: '' };
      },
    });
  }

  deleteIceCream(id: string) {
    Swal.fire({
      html: `
        <p style="font-size: 18px; font-weight: bold; font-family: 'Poppins', sans-serif;">¿Estás seguro?</p>
        <div style="text-align: center; font-family: 'Poppins', sans-serif; color: #ff6b6b;">
          <img src="https://media.tenor.com/LPykQ8QDz7QAAAAi/happy-summer.gif" alt="Ice Cream Warning" style="width: 80px; margin-bottom: 20px;"/>
          <p style="font-size: 16px; color: #333;">No podrás recuperar este helado</p>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: '<b>Sí, eliminar</b>',
      cancelButtonText: '<b>Cancelar</b>',
      confirmButtonColor: '#db99b4',
      cancelButtonColor: '#f3a683',
      background: 'white',
      customClass: {
        container: 'sweet-alert-container',
        popup: 'sweet-alert-popup',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.iceCreamService.deleteIceCream(id).subscribe({
          next: (success) => {
              this.alert.success('¡Éxito!', 'Helado eliminado.', 'OK', '#db99b4');
              this.loadIceCreams();
      }});
      }
    });
  }

  cancelEdit() {
    this.selectedIceCream = { img: '', flavor: '', price: 0, company: '', type: '' };
  }

  unlogin(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }
  
}
