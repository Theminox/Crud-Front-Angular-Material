import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { LicenciasComponent } from './licencias/licencias.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearusuariooComponent } from './usuarios/crear-usuario/crearusuarioo.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    {path: '', component: InicioComponent},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'reportes', component: ReportesComponent},
    {path: 'crear-usuario', component: CrearusuariooComponent},
    {path: 'licencias', component: LicenciasComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
