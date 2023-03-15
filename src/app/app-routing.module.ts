import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntidadFormComponent } from './components/entidad/entidad-form/entidad-form.component';
import { EntidadComponent } from './components/entidad/entidad.component';
import { LoginComponent } from './components/login/login.component';
import { TipoContribuyenteFormComponent } from './components/tipo-contribuyente/tipo-contribuyente-form/tipo-contribuyente-form.component';
import { TipoContribuyenteComponent } from './components/tipo-contribuyente/tipo-contribuyente.component';
import { TipoDocumentoFormComponent } from './components/tipo-documento/tipo-documento-form/tipo-documento-form.component';
import { TipoDocumentoComponent } from './components/tipo-documento/tipo-documento.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'tipo_contribuyente', component: TipoContribuyenteComponent, canActivate: [AuthGuard]
  },
  {
    path: 'tipo_contribuyente/form', component: TipoContribuyenteFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'tipo_contribuyente/form/:id', component: TipoContribuyenteFormComponent, canActivate: [AuthGuard]
  },

  {
    path: 'tipo_documento', component: TipoDocumentoComponent, canActivate: [AuthGuard]
  },
  {
    path: 'tipo_documento/form', component: TipoDocumentoFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'tipo_documento/form/:id', component: TipoDocumentoFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'entidad', component: EntidadComponent, canActivate: [AuthGuard]
  },
  {
    path: 'entidad/form', component: EntidadFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'entidad/form/:id', component: EntidadFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
