import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoDocumentoComponent } from './components/tipo-documento/tipo-documento.component';
import { TipoContribuyenteComponent } from './components/tipo-contribuyente/tipo-contribuyente.component';
import { EntidadComponent } from './components/entidad/entidad.component';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { TipoDocumentoFormComponent } from './components/tipo-documento/tipo-documento-form/tipo-documento-form.component';
import { TipoContribuyenteFormComponent } from './components/tipo-contribuyente/tipo-contribuyente-form/tipo-contribuyente-form.component';
import { EntidadFormComponent } from './components/entidad/entidad-form/entidad-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoDocumentoComponent,
    TipoContribuyenteComponent,
    EntidadComponent,
    LoginComponent,
    TipoDocumentoFormComponent,
    TipoContribuyenteFormComponent,
    EntidadFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
