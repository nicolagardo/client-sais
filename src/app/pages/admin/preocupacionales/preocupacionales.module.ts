import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreocupacionalesRoutingModule } from './preocupacionales-routing.module';
import { PreocupacionalesComponent } from './preocupacionales.component';


@NgModule({
  declarations: [
    PreocupacionalesComponent
  ],
  imports: [
    CommonModule,
    PreocupacionalesRoutingModule
  ]
})
export class PreocupacionalesModule { }
