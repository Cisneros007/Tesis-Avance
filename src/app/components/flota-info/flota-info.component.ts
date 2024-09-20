import { Component } from '@angular/core';

@Component({
  selector: 'app-flota-info',
  templateUrl: './flota-info.component.html',
  styleUrls: ['./flota-info.component.css']
})
export class FlotaInfoComponent {
  // Array que contiene información sobre la flota de vehículos
  fleetInfo = [
    {
      nombre: 'Camión 1',
      capacidadCarga: 5000,
      caracteristicas: ['Refrigeración', 'GPS', 'Acceso a zonas urbanas'],
      imagen: 'camion1.jpg'
    },
    {
      nombre: 'Camión 2',
      capacidadCarga: 7000,
      caracteristicas: ['Caja cerrada', 'GPS', 'Seguro de carga'],
      imagen: 'camion2.jpg'
    },

  ];

  // Variable para almacenar el vehículo seleccionado
  vehiculoSeleccionado: any = null;

  // Función que se ejecuta al seleccionar un vehículo para ver más detalles
  verDetalles(vehiculo: any): void {
    this.vehiculoSeleccionado = vehiculo;
  }

  // Función que se ejecuta al cerrar los detalles del vehículo seleccionado
  cerrarDetalles(): void {
    this.vehiculoSeleccionado = null;
  }
}
