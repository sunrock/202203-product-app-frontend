import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../models';
import { ConfirmDeleteModalComponent } from '../confirm-delete-modal/confirm-delete-modal.component';

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
  { position: 1, name: 'Hydrogen', price: 1.0079, type: 'Toys', isActive: true },
  { position: 2, name: 'Helium', price: 1.0079, type: 'Books', isActive: true },
  { position: 3, name: 'Lithium', price: 1.0079, type: 'Food,', isActive: true },
  { position: 4, name: 'Beryllium', price: 1.0079, type: 'Furniture', isActive: true },
  { position: 5, name: 'Boron', price: 1.0079, type: 'Electronics,', isActive: true },
  { position: 6, name: 'Carbon', price: 1.0079, type: 'Toy', isActive: true },
  { position: 7, name: 'Nitrogen', price: 1.0079, type: 'Food', isActive: true },

  /*
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
  */
];
