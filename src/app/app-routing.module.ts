import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { RastrearComponent } from './components/rastrear/rastrear.component';
import { PagaloComponent } from './components/pagalo/pagalo.component';
import { AgenciasComponent } from './components/agencias/agencias.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { AgenciaDetalleComponent } from './components/agencia-detalle/agencia-detalle.component';
import { FlotaInfoComponent } from './components/flota-info/flota-info.component';
import { EnvioCrearComponent } from './components/envio-crear/envio-crear.component';
import { RutasHorariosComponent } from './components/rutas-horarios/rutas-horarios.component';
import { ServiciosTerrestreComponent } from './components/servicios-terrestre/servicios-terrestre.component';
import { ServiciosAereoComponent } from './components/servicios-aereo/servicios-aereo.component';
import { EnvioHistorialComponent } from './components/envio-historial/envio-historial.component';
import { ComunicateComponent } from './components/comunicate/comunicate.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  {path: 'rastear', component: RastrearComponent, canActivate: [AuthGuard]},
  { path: 'rutas-horarios', component: RutasHorariosComponent, canActivate: [AuthGuard] },
  { path: 'servicios-terrestre', component: ServiciosTerrestreComponent, canActivate: [AuthGuard] },
  { path: 'servicios-aereo', component: ServiciosAereoComponent, canActivate: [AuthGuard] },
  { path: 'envio-crear', component: EnvioCrearComponent, canActivate: [AuthGuard] },
  { path: 'envio-historial', component: EnvioHistorialComponent, canActivate: [AuthGuard] },

  { path: 'rastrear', component: RastrearComponent, canActivate: [AuthGuard] },
  { path: 'pagalo', component: PagaloComponent, canActivate: [AuthGuard] },
  { path: 'flota-info', component: FlotaInfoComponent, canActivate: [AuthGuard] },
  { path: 'agencias', component: AgenciasComponent, canActivate: [AuthGuard] },
  { path: 'agencia-detalle/:id', component: AgenciaDetalleComponent, canActivate: [AuthGuard] },
  { path: 'tarifas', component: TarifasComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'comunicate', component: ComunicateComponent, canActivate: [AuthGuard] },
  { path: 'company-info', component: CompanyInfoComponent, canActivate: [AuthGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
