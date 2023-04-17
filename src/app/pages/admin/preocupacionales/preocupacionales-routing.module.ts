import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreocupacionalesComponent } from './preocupacionales.component';

const routes: Routes = [{ path: '', component: PreocupacionalesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreocupacionalesRoutingModule { }
