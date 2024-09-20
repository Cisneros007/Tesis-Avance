import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios-terrestre',
  templateUrl: './servicios-terrestre.component.html',
  styleUrls: ['./servicios-terrestre.component.css']
})
export class ServiciosTerrestreComponent implements OnInit {
  // Datos de ejemplo para los servicios terrestres
  servicios = [
    { nombre: 'Transporte Local', descripcion: 'Transporte dentro de la ciudad.', tarifa: 50 },
    { nombre: 'Transporte Nacional', descripcion: 'Transporte a nivel nacional.', tarifa: 150 },
  ];

  servicioSeleccionado: any;

  constructor() { }

  ngOnInit(): void {
    // Inicialización si es necesaria
  }

  verDetalles(servicio: any): void {
    this.servicioSeleccionado = servicio;
  }

  cerrarDetalles(): void {
    this.servicioSeleccionado = null;
  }

  agregarServicio(): void {
    // Lógica para agregar un nuevo servicio
    console.log('Agregar Servicio');
  }
}
