import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent {
  tarifas = [
    {
      id: 1,
      service: 'Envío Nacional',
      price: '10.00',
      description: 'Tarifa para envíos nacionales dentro del país.',
      estimatedDelivery: '1-3 días hábiles',
      additionalInfo: 'Incluye seguro básico'
    },
    {
      id: 2,
      service: 'Envío Internacional',
      price: '50.00',
      description: 'Tarifa para envíos internacionales a cualquier país.',
      estimatedDelivery: '7-15 días hábiles',
      additionalInfo: 'No incluye seguro. Se recomienda adquirir uno.'
    },
    {
      id: 3,
      service: 'Envío Express',
      price: '25.00',
      description: 'Tarifa para envíos rápidos que llegan al siguiente día.',
      estimatedDelivery: '1 día hábil',
      additionalInfo: 'Disponible solo en áreas metropolitanas'
    }
  ];

  constructor(private router: Router) {}

  viewDetails(tarifa: any) {
    this.router.navigate(['/tarifa-detalle', tarifa.id]);
  }
}
