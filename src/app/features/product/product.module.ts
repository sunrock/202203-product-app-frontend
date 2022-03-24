import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { ProductMainComponent } from './components/product-main/product-main.component';
import { ConfirmDeleteModalComponent } from './components/product-main/confirm-delete-modal/confirm-delete-modal.component';



@NgModule({
  declarations: [
    ProductMainComponent,
    ConfirmDeleteModalComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule
  ],
  exports: [
    ProductMainComponent
  ]
})
export class ProductModule { }
