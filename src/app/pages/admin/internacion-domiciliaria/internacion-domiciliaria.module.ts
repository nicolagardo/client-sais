import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternacionDomiciliariaRoutingModule } from './internacion-domiciliaria-routing.module';
import { InternacionDomiciliariaComponent } from './internacion-domiciliaria.component';


@NgModule({
  declarations: [
    InternacionDomiciliariaComponent
  ],
  imports: [
    CommonModule,
    InternacionDomiciliariaRoutingModule
  ]
})
export class InternacionDomiciliariaModule { }
