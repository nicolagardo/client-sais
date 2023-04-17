import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItaSaludRoutingModule } from './ita-salud-routing.module';
import { ItaSaludComponent } from './ita-salud.component';


@NgModule({
  declarations: [
    ItaSaludComponent
  ],
  imports: [
    CommonModule,
    ItaSaludRoutingModule
  ]
})
export class ItaSaludModule { }
