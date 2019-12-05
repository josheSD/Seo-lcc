import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Traductor
import { HttpClientModule ,HttpClient } from '@angular/common/http';
import { TranslateModule , TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './main/navbar/navbar.component';
import { HomeComponent } from './main/home/home.component';
import { FooterComponent } from './main/footer/footer.component';
import { NosotrosComponent } from './main/nosotros/nosotros.component';
import { SalasComponent } from './main/salas/salas.component';
import { EspaciosComponent } from './main/espacios/espacios.component';
import { ContactoComponent } from './main/contacto/contacto.component';
import { ComunidadComponent } from './main/comunidad/comunidad.component';
import { ComunidadMainComponent } from './main/comunidad-main/comunidad-main.component';
import { NotFoundPageComponent } from './main/not-found-page/not-found-page.component';
import { PipesModule } from './pipes/pipes.module';
import { MaterialModule } from './module/material/material.module';
import { NgxBootstrapModule } from './module/ngx-bootstrap/ngx-bootstrap.module';

export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/idiomas/','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    NosotrosComponent,
    SalasComponent,
    EspaciosComponent,
    ContactoComponent,
    ComunidadComponent,
    ComunidadMainComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PipesModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: (createTranslateLoader),
        deps:[HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
