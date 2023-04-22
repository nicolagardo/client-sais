import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItaSaludRoutingModule } from './ita-salud-routing.module';
import { ItaSaludComponent } from './ita-salud.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [ItaSaludComponent],
  imports: [CommonModule, ItaSaludRoutingModule, MaterialModule],
})
export class ItaSaludModule {}
