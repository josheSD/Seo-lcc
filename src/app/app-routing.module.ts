import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './main/home/home.component';
import { NosotrosComponent } from './main/nosotros/nosotros.component';
import { SalasComponent } from './main/salas/salas.component';
import { EspaciosComponent } from './main/espacios/espacios.component';
import { ContactoComponent } from './main/contacto/contacto.component';
import { ComunidadComponent } from './main/comunidad/comunidad.component';
import { NotFoundPageComponent } from './main/not-found-page/not-found-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent,data:{titulo:'',description:'Ofrecemos espacios colaborativos, oficinas privadas, salas de reunión y capacitación. Somos el único Cowork ubicado en Lima Cargo City, Callao.',slug:'home'}},
  {path:'nosotros',component:NosotrosComponent,data:{titulo:'nosotros',description:'Somos LCC Espacios, el espacio de trabajo para la comunidad del comercio internacional: Operadores logisticos, exportadores, importadores.',slug:'nosotros'}},
  {path:'salas',component:SalasComponent,data:{titulo:'salas',description:'Salas de reuniones, de capacitaciones y directorio diseñadas, para tener la mejor experiencia de trabajo con tu equipo y tus clientes.',slug:'salas'}},
  {path:'espacios',component:EspaciosComponent,data:{titulo:'espacios',description:'Oficinas 100% implementados y diseñados para tu operación. Ven y reserva tu espacio en la primera comunidad del comercio internacional del país.',slug:'espacios'}},
  {path:'escribenos',component:ContactoComponent,data:{titulo:'escribenos',description:'Completa el formulario y con gusto nos pondremos en contacto lo antes posible para atender tus consultas, inquietudes y agendar un tour.',slug:'escribenos'}},
  {path:'comunidad',component:ComunidadComponent,data:{titulo:'comunidad',description:'Aumenta tus oportunidades comerciales, optimiza tus operaciones y conoce las mejores practicas en la primera comunidad del comercio internacional.',slug:'comunidad'}},
  {path:'**',component:NotFoundPageComponent,data:{titulo:'404'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
