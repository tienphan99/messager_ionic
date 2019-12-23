import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DangnhapPageRoutingModule } from './dangnhap-routing.module';

import { DangnhapPage } from './dangnhap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // Validators, FormBuilder, FormGroup, FormControl,
    DangnhapPageRoutingModule
  ],
  declarations: [DangnhapPage]
})
export class DangnhapPageModule {}
