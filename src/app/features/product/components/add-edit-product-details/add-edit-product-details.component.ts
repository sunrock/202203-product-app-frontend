import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductActionService } from '../../services/product-action.service';
import { first } from 'rxjs/operators';
import { Product, ProductBody, PROD_TYPES } from '../../models';

// should be 100
const NAME_MAX_LENGH: number = 10;
const PRICE_REGEX = /^\d+(\.\d{1,2})?$/
const TYPE_REGEX = /^(Books|Electronics|Food|Furniture|Toys)$/

@Component({
  selector: 'app-add-edit-product-details',
  templateUrl: './add-edit-product-details.component.html',
  styleUrls: ['./add-edit-product-details.component.css']
})
export class AddEditProductDetailsComponent implements OnInit {

  // mode
  isAdding = true;

  // product id
  pid: string
  productName: string;

  productForm: FormGroup;

  typeOptions = PROD_TYPES;

  name = 'name'
  price = 'price'
  type = 'type'
  isActive = 'isActive'

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productSvc: ProductActionService
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(NAME_MAX_LENGH)]],
      price: ['', [Validators.required, Validators.pattern(PRICE_REGEX)]],
      type: ['', [Validators.required, Validators.pattern(TYPE_REGEX)]],
      isActive: [true, Validators.required]
    });
  }

  ngOnInit() {
    this.pid = this.route.snapshot.params['pid'];
    console.log('pid', this.pid)
    this.isAdding = !this.pid;

    console.log('mode is adding: ', this.isAdding)

    if (!this.isAdding) {
      this.productSvc.getProductById(this.pid)
        // .pipe(first())
        .subscribe(rd => {
          const product: Product = rd.data;
          console.log('product', product)
          this.productName = product.name;
          this.productForm.patchValue(product)
        });
    }
  }

  getErrorMessage(controlName: string) {

    let currControl = this.productForm.controls[controlName];

    // console.log('controlName', controlName)
    // console.log('errors', currControl.errors)

    if (currControl.hasError('required')) {
      return `Please put a value for product ${controlName}.`
    }
    else if (currControl.hasError('maxlength')) {
      let lengthError = currControl.getError('maxlength')
      return `Product ${controlName} is too long. The maximum length is ${lengthError.requiredLength}.`
    }
    else if (currControl.hasError('pattern')) {
      if (controlName === this.price) {
        return `Product price is not valid, it accepts maximum 2 decimals.`
      }
    }

    return `Product ${controlName} is not valid. Please check your input.`
  }

  onChangeProductType(evt: MatSelectChange) {
    console.log('select evt', evt)
    this.productForm.controls['type'].setValue(evt.value);
  }

  onChangeActiveStatus(evt: MatSlideToggleChange) {
    console.log('toggle evt', evt)
    this.productForm.controls['isActive'].setValue(evt.checked);
  }

  onSubmitProductForm(form = this.productForm) {

    if (form.valid) {
      console.log('Form is valid', form.value)

      let productFileds: ProductBody = form.value;

      if (this.isAdding) {
        this.productSvc.addProduct(productFileds).subscribe({
          next: _ => {
            this.router.navigate(['/'])
          }
        })
      }
      else {
        this.productSvc.updateProduct(this.pid, productFileds).subscribe({
          next: _ => {
            this.router.navigate(['/'])
          }
        })
      }

    } else {
      console.log('Form is invalid')
    }
  }

}
