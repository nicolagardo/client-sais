import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ModalMovimientosComponent } from './components/modal-movimientos/modal-movimientos.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AjustesComponent } from './components/ajustes/ajustes.component';

@NgModule({
  declarations: [AdminComponent, ModalMovimientosComponent, AjustesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [AdminComponent],
})
export class AdminModule {}
