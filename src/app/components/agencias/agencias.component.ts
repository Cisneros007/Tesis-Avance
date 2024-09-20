import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agencias',
  templateUrl: './agencias.component.html',
  styleUrls: ['./agencias.component.css']
})
export class AgenciasComponent {
  agencias = [
    {
      id: 1,
      name: 'Agencia Central',
      address: 'Av. Principal 123, Ciudad Capital',
      phone: '(01) 234-5678',
      email: 'central@agencias.com'
    },
    {
      id: 2,
      name: 'Agencia Norte',
      address: 'Calle Norte 456, Barrio Norte',
      phone: '(01) 876-5432',
      email: 'norte@agencias.com'
    },
    {
      id: 3,
      name: 'Agencia Sur',
      address: 'Av. del Sur 789, Sector Sur',
      phone: '(01) 345-6789',
      email: 'sur@agencias.com'
    },
    // Añadir más agencias según sea necesario
  ];

  constructor(private router: Router) {}

  viewDetails(agencia: any) {
    this.router.navigate(['/agencia-detalle', agencia.id]);
  }
}
