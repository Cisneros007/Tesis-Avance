import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rutas-horarios',
  templateUrl: './rutas-horarios.component.html',
  styleUrls: ['./rutas-horarios.component.css']
})
export class RutasHorariosComponent implements OnInit {
  // Datos de ejemplo para rutas y envíos
  rutas = [
    { nombreRuta: 'Ruta A', horaSalida: '08:00 AM', horaLlegada: '10:00 AM', duracion: '2h' },
    { nombreRuta: 'Ruta B', horaSalida: '11:00 AM', horaLlegada: '01:00 PM', duracion: '2h' },
    { nombreRuta: 'Ruta C', horaSalida: '02:00 PM', horaLlegada: '04:00 PM', duracion: '2h' }
  ];

  envios = [
    { nombreEnvio: 'Envío 1', fechaEnvio: '2024-09-20', horaEnvio: '08:30 AM', estado: 'En tránsito' },
    { nombreEnvio: 'Envío 2', fechaEnvio: '2024-09-21', horaEnvio: '11:00 AM', estado: 'Entregado' },
    { nombreEnvio: 'Envío 3', fechaEnvio: '2024-09-22', horaEnvio: '02:15 PM', estado: 'En espera' }
  ];

  // Datos del detalle
  rutaSeleccionada: any;
  envioSeleccionado: any;

  constructor() { }

  ngOnInit(): void {
    // Inicialización si es necesaria
  }

  verDetallesRuta(ruta: any): void {
    this.rutaSeleccionada = ruta;
  }

  verDetallesEnvio(envio: any): void {
    this.envioSeleccionado = envio;
  }

  agregarRuta(): void {
    // Lógica para agregar una nueva ruta
    console.log('Agregar Ruta');
  }

  agregarEnvio(): void {
    // Lógica para agregar un nuevo envío
    console.log('Agregar Envío');
  }
}
