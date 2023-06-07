import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {
    path: 'ita-salud',
    loadChildren: () =>
      import('./ita-salud/ita-salud.module').then((m) => m.ItaSaludModule),
  },
  {
    path: 'internacionDomiciliaria',
    loadChildren: () =>
      import('./internacion-domiciliaria/internacion-domiciliaria.module').then(
        (m) => m.InternacionDomiciliariaModule
      ),
  },
  {
    path: 'preocupacionales',
    loadChildren: () =>
      import('./preocupacionales/preocupacionales.module').then(
        (m) => m.PreocupacionalesModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: 'ita-salud/ajustes', component: AjustesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
