import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View2Component} from './components/view2/view2.component';
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
const routes: Routes = [
  { path: 'chooseScan/anteNatal', component: View3Component},
  { path: '', redirectTo : 'home', pathMatch: 'full'},
  {path: 'home', component:FirstComponent},
  { path: 'chooseScan', component: View2Component},
  { path: 'home/presets', component: PresetsComponent},
  { path: 'home/presets/trauma', component: PTraumaComponent},
  { path: 'home/presets/obstetric', component: ObstetricComponent},
  { path: 'home/gallery', component: GalleryComponent},
  { path: 'home/quickScan', component: View3Component},
  { path: 'captured', component: CapturedComponent},
  { path: 'captured/:id', component: CapturedComponent},
  { path: 'takescan/:id', component: View3Component},
  { path: 'ten', component: TensorflowCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
