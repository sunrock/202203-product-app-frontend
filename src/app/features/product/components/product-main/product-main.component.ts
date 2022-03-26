import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DEMO_DATA } from '../../data';
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

  dataSource = new MatTableDataSource<Product>(DEMO_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer
  ) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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
