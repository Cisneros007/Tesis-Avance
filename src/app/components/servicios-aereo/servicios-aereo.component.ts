import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios-aereo',
  templateUrl: './servicios-aereo.component.html',
  styleUrls: ['./servicios-aereo.component.css']
})
export class ServiciosAereoComponent {
  // Lista de servicios aéreos
  serviciosAereos = [
    {
      nombre: 'Envío Exprés Aéreo',
      descripcion: 'Servicio de envío rápido con prioridad en entregas.',
      tarifa: 120.00
    },
    {
      nombre: 'Envío Estándar Aéreo',
      descripcion: 'Entrega estándar con tiempos moderados.',
      tarifa: 80.00
    },
    {
      nombre: 'Envío Económico Aéreo',
      descripcion: 'Servicio de bajo costo para cargas más grandes.',
      tarifa: 50.00
    }
  ];

  // Servicio seleccionado para mostrar detalles
  servicioSeleccionado: any = null;

  // Método para ver los detalles de un servicio
  verDetalles(servicio: any) {
    this.servicioSeleccionado = servicio;
  }

  // Método para cerrar los detalles del servicio seleccionado
  cerrarDetalles() {
    this.servicioSeleccionado = null;
  }

  // Método para agregar un nuevo servicio (funcionalidad a implementar)
  agregarServicio() {
    console.log('Agregar servicio aéreo');
    // Aquí puedes implementar la lógica para agregar un nuevo servicio aéreo.
  }
}
