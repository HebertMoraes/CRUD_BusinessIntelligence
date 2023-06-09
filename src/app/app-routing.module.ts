import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './security/auth.guard';


const routes: Routes = [
  { 
    path: 'login',
    loadChildren: () => import('./components/login-page/login-page.module')
      .then(m => m.LoginPageModule)
  }, 
  { 
    path: 'home',
    loadChildren: () => import('./components/opening-page/opening-page.module')
      .then(m => m.OpeningPageModule), 
    canActivate: [AuthGuard]
  },
  { 
    path: 'criar-venda',
    loadChildren: () => import('./components/create-sale-page/create-sale-page.module')
      .then(m => m.CreateSalePageModule), 
    canActivate: [AuthGuard]
  },
  { 
    path: 'minhas-vendas',
    loadChildren: () => import('./components/see-sales-page/see-sales-page.module')
      .then(m => m.SeeSalesPageModule), 
    canActivate: [AuthGuard]
  },
  { 
    path: 'dashboard-vendas',
    loadChildren: () => import('./components/dashboard-page/dashboard-page.module')
      .then(m => m.DashboardPageModule), 
    canActivate: [AuthGuard]
  },
  { 
    path: 'carros',
    loadChildren: () => import('./components/cars-page/cars-page.module')
      .then(m => m.CarsPageModule), 
    canActivate: [AuthGuard]
  },
  { 
    path: 'gerenciar-carros',
    loadChildren: () => import('./components/manage-cars-page/manage-cars-page.module')
      .then(m => m.ManageCarsPageModule), 
    canActivate: [AuthGuard]
  },
  { 
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  }, 
  { 
    path: '**',
    loadChildren: () => import('./components/not-found-page/not-found-page.module')
      .then(m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
