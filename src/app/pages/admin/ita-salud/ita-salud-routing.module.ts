import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItaSaludComponent } from './ita-salud.component';

const routes: Routes = [{ path: '', component: ItaSaludComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItaSaludRoutingModule { }
