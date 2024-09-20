import { Component } from '@angular/core';

@Component({
  selector: 'app-envio-historial',
  templateUrl: './envio-historial.component.html',
  styleUrls: ['./envio-historial.component.css']
})
export class EnvioHistorialComponent {
  historialEnvios = [
    {
      nombreEnvio: 'Envío #1',
      fechaEnvio: '2024-09-01',
      horaEnvio: '10:00',
      estado: 'Completado',
      descripcion: 'Envío completado sin problemas.'
    },
    {
      nombreEnvio: 'Envío #2',
      fechaEnvio: '2024-09-02',
      horaEnvio: '14:30',
      estado: 'En Progreso',
      descripcion: 'Envío en tránsito.'
    },
    {
      nombreEnvio: 'Envío #3',
      fechaEnvio: '2024-09-03',
      horaEnvio: '09:15',
      estado: 'Pendiente',
      descripcion: 'Envío programado, pendiente de salida.'
    }
  ];

  envioSeleccionado: any = null;

  // Ver detalles del envío
  verDetallesEnvio(envio: any) {
    this.envioSeleccionado = envio;
  }

  // Cerrar detalles del envío
  cerrarDetalles() {
    this.envioSeleccionado = null;
  }
}
