import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RastrearComponent } from './components/rastrear/rastrear.component';
import { FormsModule } from '@angular/forms';
import { PagaloComponent } from './components/pagalo/pagalo.component';
import { AgenciasComponent } from './components/agencias/agencias.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { AgenciaDetalleComponent } from './components/agencia-detalle/agencia-detalle.component';

import { FlotaInfoComponent } from './components/flota-info/flota-info.component';
import { RutasHorariosComponent } from './components/rutas-horarios/rutas-horarios.component';
import { ServiciosTerrestreComponent } from './components/servicios-terrestre/servicios-terrestre.component';
import { ServiciosAereoComponent } from './components/servicios-aereo/servicios-aereo.component';
import { EnvioCrearComponent } from './components/envio-crear/envio-crear.component';
import { EnvioHistorialComponent } from './components/envio-historial/envio-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    RastrearComponent,
    HeaderComponent,
    RastrearComponent,
    PagaloComponent,
    AgenciasComponent,
    TarifasComponent,
    AgenciaDetalleComponent,
    SidebarComponent,
    FlotaInfoComponent,
    RutasHorariosComponent,
    ServiciosTerrestreComponent,
    ServiciosAereoComponent,
    EnvioCrearComponent,
    EnvioHistorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),

    // error solution NullInjectError
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
