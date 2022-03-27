import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../models';
import { ProductActionService } from '../../services/product-action.service';
import { ConfirmDeleteModalComponent } from './confirm-delete-modal/confirm-delete-modal.component';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.css']
})
export class ProductMainComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [
    'add_action',
    'name', 'price', 'type', 'isActive',
    'edit_action',
    'delete_action'
  ];

  dataSource = new MatTableDataSource<Product>([])

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private productSvc: ProductActionService
  ) { }

  ngOnInit() {
    this.reloadProducts()
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onConfirmDelete(product: Product) {

    const productName = product.name;

    console.log('productName: ', productName)
    const dialogRef = this.dialog.open(ConfirmDeleteModalComponent, {
      width: '400px',
      data: { name: productName }
    });

    dialogRef.afterClosed().subscribe(result => {
      // if confirmed
      if (result) {
        console.log('confirmed: ', result);

        this.productSvc.deleteProduct(product.pid).subscribe({
          next: _ => {
            this.reloadProducts()
          }
        })
      }

      console.log('The dialog was closed')
    });
  }

  reloadProducts() {
    this.productSvc.getProducts().subscribe(
      rd => {
        const products: Product[] = rd.data;

        console.log()
        this.dataSource.data = products;
      }
    )
  }

}
