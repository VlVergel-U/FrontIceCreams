import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AlertService } from '../../../services/alert.service';
import { icecream } from '../../../models/ice_cream.model';
import { IceCreamService } from '../../../services/icecream.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private alert: AlertService, private iceCreamService: IceCreamService) {}

  ngOnInit() {
    this.loadIceCreams();
  }

  loadIceCreams() {
    this.iceCreamService.getAllIceCreams().subscribe({
      next: (data) => {
        this.iceCreams = data;
      },
      error: () => {
        this.alert.error('Error', 'Hubo un problema al cargar los helados.', 'OK', '#db99b4');
      }
    });
  }
  
  addIceCream(form: any) {
    const iceCreamData: icecream = { ...form.value };
  
    this.iceCreamService.createIceCream(iceCreamData).subscribe({
      next: (success) => {
        if (success) {
          this.alert.success('¡Éxito!', 'Helado agregado correctamente.', 'OK', '#db99b4');
          this.loadIceCreams();
          form.reset();
        } else {
          this.alert.error('Error', 'No se pudo agregar el helado.', 'OK', '#db99b4');
        }
      },
      error: () => {
        this.alert.error('Error', 'No se pudo agregar el helado.', 'OK', '#db99b4');
      }
    });
  }

  editIceCream(id: string) {
    this.iceCreamService.getOneIceCream(id).subscribe({
      next: (data) => {
        this.selectedIceCream = data;
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

    this.iceCreamService.modifyIceCream(this.selectedIceCream.id, this.selectedIceCream).subscribe(
      (success) => {
        if (success) {
          this.alert.success('¡Éxito!', 'Helado actualizado correctamente.', 'OK', '#db99b4');
          this.loadIceCreams();
        } else {
          this.alert.error('Error', 'No se pudo actualizar el helado.', 'OK', '#db99b4');
        }
      },
      () => {
        this.alert.error('Error', 'No se pudo actualizar el helado.', 'OK', '#db99b4');
      }
    );
  }

  deleteIceCream(id: string) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás recuperar este helado.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.iceCreamService.deleteIceCream(id).subscribe({
          next: (success) => {
            if (success) {
              this.alert.success('¡Éxito!', 'Helado eliminado.', 'OK', '#db99b4');
              this.loadIceCreams();
            } else {
              this.alert.error('Error', 'No se pudo eliminar el helado.', 'OK', '#db99b4');
            }
          },
          error: () => {
            this.alert.error('Error', 'No se pudo eliminar el helado.', 'OK', '#db99b4');
          }
        });
      }
    });
  }

  cancelEdit() {
    this.selectedIceCream = { img: '', flavor: '', price: 0, company: '', type: '' };
  }
  
  
}
