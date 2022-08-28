import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeUpdateComponent } from './widgets/time-update/time-update.component';
import { DeviceTestResultComponent } from './widgets/device-test-result/device-test-result.component';
import { DeviceStatusComponent } from './widgets/device-status/device-status.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeUpdateComponent,
    DeviceTestResultComponent,
    DeviceStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
