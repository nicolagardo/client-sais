import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ModalMovimientosComponent } from './components/modal-movimientos/modal-movimientos.component';

@NgModule({
  declarations: [AdminComponent, ModalMovimientosComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [AdminComponent],
})
export class AdminModule {}
