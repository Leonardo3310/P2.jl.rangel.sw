import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinosaurioListComponent } from './dinosaurio-list/dinosaurio-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DinosaurioListComponent, DinosaurioListComponent],
  exports: []
 })
 export class DinosaurioModule { }
