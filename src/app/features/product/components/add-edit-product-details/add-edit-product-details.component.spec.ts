import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProductDetailsComponent } from './add-edit-product-details.component';

describe('AddEditProductDetailsComponent', () => {
  let component: AddEditProductDetailsComponent;
  let fixture: ComponentFixture<AddEditProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProductDetailsComponent ]
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
