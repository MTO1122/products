import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideFourComponent } from './slide-four/slide-four.component';
import { SlideOneComponent } from './slide-one/slide-one.component';
import { SlideThreeComponent } from './slide-three/slide-three.component';
import { SlideTwoComponent } from './slide-two/slide-two.component';
import { studioComponent } from './studio/studio.component';
import { PageOneComponent } from './view/page-one/page-one.component';
import { PageTreeComponent } from './view/page-tree/page-tree.component';
import { PageTwoComponent } from './view/page-two/page-two.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path: "",redirectTo:"studio",pathMatch:"full"},
  {path:"studio",component: studioComponent},
  {path:"view",component: ViewComponent},
  {path:"slide-one", component: SlideOneComponent},
  {path:"slide-two", component: SlideTwoComponent},
  {path:"slide-three", component: SlideThreeComponent},
  {path:"page-two", component: PageTwoComponent},
  {path:"slide-four", component: SlideFourComponent},
  {path:"page-tree", component: PageTreeComponent},
  {path:"page-one",component: PageOneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
