import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AddEditProductDetailsComponent } from './add-edit-product-details.component';

import { ActivatedRoute, Router } from '@angular/router';

import { ProductActionService } from '../../services/product-action.service';

describe('AddEditProductDetailsComponent', () => {
  let component: AddEditProductDetailsComponent;
  let fixture: ComponentFixture<AddEditProductDetailsComponent>;

  let formBuilderMock: any;
  let routeMock: ActivatedRoute;
  let router: Router;
  let productSvcMock: ProductActionService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ AddEditProductDetailsComponent ],
      providers: [
        { provide: FormBuilder, useValue: formBuilderMock },
        { provide: ActivatedRoute, useValue: routeMock },
        { provide: Router, useValue: router },
        { provide: ProductActionService, useValue: productSvcMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
