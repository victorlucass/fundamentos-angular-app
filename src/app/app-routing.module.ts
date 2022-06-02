import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'communication',
    loadChildren: () =>
      import('src/app/communication/communication.module').then(
        (m) => m.CommunicationModule
      )
  }
  // {
  //   path: 'categories',
  //   loadChildren: () =>
  //     import('src/app/pages/categories/categories.module').then(
  //       (m) => m.CategoriesModule
  //     )
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
