import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {
    path: 'ita-salud',
    loadChildren: () =>
      import('./ita-salud/ita-salud.module').then((m) => m.ItaSaludModule),
  },
  { path: 'internacionDomiciliaria', loadChildren: () => import('./internacion-domiciliaria/internacion-domiciliaria.module').then(m => m.InternacionDomiciliariaModule) },
  { path: 'preocupacionales', loadChildren: () => import('./preocupacionales/preocupacionales.module').then(m => m.PreocupacionalesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
