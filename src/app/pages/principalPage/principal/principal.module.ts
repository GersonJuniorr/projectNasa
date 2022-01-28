import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class PrincipalModule { }
