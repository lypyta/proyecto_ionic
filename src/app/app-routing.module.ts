import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'bienvenido',
    loadChildren: () => import('./bienvenido/bienvenido.module').then( m => m.BienvenidoPageModule)
  },
  
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },

  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },  
   
  {
    path: 'produc-nuevo',
    loadChildren: () => import('./producto/produc-nuevo/produc-nuevo.module').then( m => m.ProducNuevoPageModule)
  },
  {
    path: 'produc-eliminar',
    loadChildren: () => import('./producto/produc-eliminar/produc-eliminar.module').then( m => m.ProducEliminarPageModule)
  },
  {
    path: 'produc-editar/:id',
    loadChildren: () => import('./producto/produc-editar/produc-editar.module').then( m => m.ProducEditarPageModule)
  },
  {
    path: 'produc-listar/:id',
    loadChildren: () => import('./producto/produc-listar/produc-listar.module').then( m => m.ProducListarPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
