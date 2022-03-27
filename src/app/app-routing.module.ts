import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AddEditProductDetailsComponent } from './features/product/components/add-edit-product-details/add-edit-product-details.component';
import { ProductMainComponent } from './features/product/components/product-main/product-main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', component: ProductMainComponent },
  { path: 'edit/product/:pid', component: AddEditProductDetailsComponent },
  { path: 'add/product', component: AddEditProductDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
