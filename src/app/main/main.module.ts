import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { UserproductCategoryComponent } from './userproduct-category/userproduct-category.component';
import { UserproductComponent } from './userproduct/userproduct.component';



@NgModule({
  declarations: [MainComponent, UserproductCategoryComponent, UserproductComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
