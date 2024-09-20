import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envio-crear',
  templateUrl: './envio-crear.component.html',
  styleUrls: ['./envio-crear.component.css']
})
export class EnvioCrearComponent {
  // Definir un objeto vacío para el nuevo envío
  nuevoEnvio = {
    nombreEnvio: '',
    fechaEnvio: '',
    horaEnvio: '',
    estado: 'Pendiente' // Estado por defecto
  };

  constructor(private router: Router) {}

  // Método para crear un nuevo envío
  crearEnvio() {
    console.log('Nuevo Envío:', this.nuevoEnvio);

    // Aquí puedes agregar la lógica para guardar el envío, por ejemplo,
    // enviarlo a un servidor o agregarlo a una lista existente.
    
    // Redirigir a otra página después de crear el envío (opcional)
    this.router.navigate(['/envios']);
  }
}
