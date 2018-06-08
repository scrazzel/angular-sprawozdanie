import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from '../../components/hello/hello.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [HelloComponent],
  exports: [HelloComponent]
})
export class HelloModule { }
