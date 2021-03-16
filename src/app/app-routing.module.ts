import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';


const routes: Routes = [
  {path: "**", component: EmptyRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' + (window.location.pathname.split('/')[1] || '') }
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
