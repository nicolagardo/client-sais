import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternacionDomiciliariaComponent } from './internacion-domiciliaria.component';

const routes: Routes = [{ path: '', component: InternacionDomiciliariaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternacionDomiciliariaRoutingModule { }
