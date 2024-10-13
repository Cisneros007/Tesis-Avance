import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envio-crear',
  templateUrl: './envio-crear.component.html',
  styleUrls: ['./envio-crear.component.css']
})
export class EnvioCrearComponent implements AfterViewInit {
  nuevoEnvio = {
    nombreEnvio: '',
    fechaEnvio: '',
    horaEnvio: '',
    estado: 'Pendiente'
  };

  constructor(private elRef: ElementRef, private renderer: Renderer2, private router: Router) {}

  // Método para crear el envío
  crearEnvio() {
    if (this.nuevoEnvio.nombreEnvio && this.nuevoEnvio.fechaEnvio && this.nuevoEnvio.horaEnvio && this.nuevoEnvio.estado) {
      console.log('Nuevo Envío Creado:', this.nuevoEnvio);

      // Aquí puedes agregar la lógica para enviar el objeto a un servicio o API
      // Por ejemplo:
      // this.envioService.crearEnvio(this.nuevoEnvio).subscribe(response => {
      //   console.log('Envío creado exitosamente', response);
      // });
    } else {
      console.error('Por favor completa todos los campos');
    }
  }

  // Ejecutado después de que la vista ha sido inicializada
  ngAfterViewInit(): void {
    this.setupToggleButtons();
  }

  // Navegación a la vista de detalles de la tarifa
  viewDetails(tarifa: any) {
    this.router.navigate(['/tarifa-detalle', tarifa.id]);
  }

  // Configuración de botones de alternancia para los submenús
  private setupToggleButtons(): void {
    const sidebar = this.elRef.nativeElement.querySelector('.sidebar');
    const toggleButtons = sidebar.querySelectorAll('.toggle-submenu');

    // Función para cerrar todos los submenús
    const closeAllSubmenus = () => {
      sidebar.querySelectorAll('.submenu').forEach((submenu: HTMLElement) => {
        this.renderer.setStyle(submenu, 'display', 'none');
      });
      toggleButtons.forEach((button: HTMLElement) => {
        this.renderer.removeClass(button, 'active');
      });
    };

    // Agrega el evento de clic a los botones de alternancia
    toggleButtons.forEach((button: HTMLElement) => {
      this.renderer.listen(button, 'click', (e: Event) => {
        e.preventDefault();
        const submenu = button.nextElementSibling as HTMLElement;

        if (submenu.style.display === 'block') {
          this.renderer.setStyle(submenu, 'display', 'none');
          this.renderer.removeClass(button, 'active');
        } else {
          closeAllSubmenus();
          this.renderer.setStyle(submenu, 'display', 'block');
          this.renderer.addClass(button, 'active');
        }
      });
    });

    // Cierra todos los submenús cuando se hace clic fuera de la barra lateral
    this.renderer.listen('document', 'click', (e: Event) => {
      if (!sidebar.contains(e.target as Node)) {
        closeAllSubmenus();
      }
    });
  }
}
