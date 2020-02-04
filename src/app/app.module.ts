import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View2Component } from './components/view2/view2.component';
import { View1Component } from './components/view1/view1.component';
import { View3Component } from './components/view3/view3.component';

import { FirstComponent } from './components/first/first.component';
import { PresetsComponent } from './components/presets/presets.component';
import { PTraumaComponent } from './components/ptrauma/ptrauma.component';
import { ObstetricComponent } from './components/obstetric/obstetric.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { QuickScanComponent } from './components/quick-scan/quick-scan.component';
import { CapturedComponent } from './components/captured/captured.component';
import { TensorflowCComponent } from './components/tensorflow-c/tensorflow-c.component';

@NgModule({
  declarations: [
    AppComponent,
    View2Component,
    View1Component,
    View3Component,
    
    FirstComponent,
    
    PresetsComponent,
    
    PTraumaComponent,
    
    ObstetricComponent,
    
    GalleryComponent,
    
    QuickScanComponent,
    
    CapturedComponent,
    
    TensorflowCComponent
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
