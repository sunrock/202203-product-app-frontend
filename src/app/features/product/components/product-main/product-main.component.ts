import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../models';
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

  dataSource = new MatTableDataSource<Product>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onConfirmDelete(productName: string) {

    console.log('productName: ', productName)
    const dialogRef = this.dialog.open(ConfirmDeleteModalComponent, {
      width: '400px',
      data: { name: productName }
    });

    dialogRef.afterClosed().subscribe(result => {
      // if confirmed
      if (result) {
        console.log('confirmed: ', result);
      }

      console.log('The dialog was closed')

    });
  }

}

const ELEMENT_DATA: Product[] = [
  { pid: 1, name: 'Hydrogen', price: 1.0079, type: 'Toys', isActive: true },
  { pid: 2, name: 'Helium', price: 1.0079, type: 'Books', isActive: true },
  { pid: 3, name: 'Lithium', price: 1.0079, type: 'Food,', isActive: true },
  { pid: 4, name: 'Beryllium', price: 1.0079, type: 'Furniture', isActive: true },
  { pid: 5, name: 'Boron', price: 1.0079, type: 'Electronics,', isActive: true },
  { pid: 6, name: 'Carbon', price: 1.0079, type: 'Toy', isActive: true },
  { pid: 7, name: 'Nitrogen', price: 1.0079, type: 'Food', isActive: true },

  /*
  { pid: 2, name: 'Helium', price: 4.0026, type: 'Toys', isActive: true },
  { pid: 3, name: 'Lithium', price: 6.941, type: 'Toys', isActive: true },
  { pid: 4, name: 'Beryllium', price: 9.0122, type: 'Furniture', isActive: true },
  { pid: 5, name: 'Boron', price: 10.811, type: 'Toy', isActive: true },
  { pid: 6, name: 'Carbon', price: 12.0107, type: 'Toy', isActive: true },
  { pid: 7, name: 'Nitrogen', price: 14.0067, type: 'Toy', isActive: true },
  { pid: 8, name: 'Oxygen', price: 15.9994, type: 'Toy', isActive: true },
  { pid: 9, name: 'Fluorine', price: 18.9984, type: 'Toy', isActive: true },
  { pid: 10, name: 'Neon', price: 20.1797, type: 'Food', isActive: true },
  { pid: 11, name: 'Sodium', price: 22.9897, type: 'Food', isActive: true },
  { pid: 12, name: 'Magnesium', price: 24.305, type: 'Food', isActive: true },
  { pid: 13, name: 'Aluminum', price: 26.9815, type: 'Food', isActive: true },
  { pid: 14, name: 'Silicon', price: 28.0855, type: 'Food', isActive: true },
  { pid: 15, name: 'Phosphorus', price: 30.9738, type: 'Books', isActive: true }
  { pid: 16, name: 'Sulfur', price: 32.065, type: 'Books', isActive: true }
  { pid: 17, name: 'Chlorine', price: 35.453, type: 'Books', isActive: true }
  { pid: 18, name: 'Argon', price: 39.948, type: 'Books', isActive: true }
  { pid: 19, name: 'Potassium', price: 39.0983, type: 'Books', isActive: true }
  { pid: 20, name: 'Calcium', price: 40.078, type: 'Electronics,', isActive: true },
  */
];
