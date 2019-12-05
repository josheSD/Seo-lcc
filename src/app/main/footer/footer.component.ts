import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterService } from '../../services/footer.service';

declare var $:any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  //Changes

  public propertyResponse;
  public objectTemporal:any = {};

  anoActual:any;

  constructor(
    public router: Router,
    public _footerService: FooterService
  ) { }

  ngOnInit() {
    this.getFooter();
    this.anoActual = new Date().getFullYear();
  }

  getFooter(){
    this._footerService.getFooter()
        .subscribe(respuesta=>{
          if(respuesta[0] != null){
            this.propertyResponse = Object.keys(respuesta[0]);
            this.propertyResponse.forEach(row=>{
              if(row.indexOf('Imagen') >= 0){
                this.objectTemporal[row] = respuesta[0][row];
              }
            })
          }
        })
  }

  routerHome(){
    this.router.navigate(['/']);

    let navLinkTable = $('#menu-principal .nav-link');
    for(let link of navLinkTable){
      if($(link).hasClass('colorN')){
        $(link).removeClass('colorN');
      }
    }
    
    let navLink = $('.nav-link');
    for(let link of navLink){
      if($(link).hasClass('colorA')){
        $(link).removeClass('colorA');
      }
    }

  }

  routerNosotros(){
    this.router.navigate(['/nosotros']);
    let navLinkTable = $('#menu-principal .nav-link');
    for(let link of navLinkTable){
      if($(link).hasClass('colorN')){
        $(link).removeClass('colorN');
      }
    } 
    $('#lli9').addClass('colorN');

    let navLink = $('#navbar-movil .nav-link');
    for(let link of navLink){
      if($(link).hasClass('colorA')){
        $(link).removeClass('colorA');
      }
    }
    $('#lli4').addClass('colorA');
  }

  routerEspacios(){
    this.router.navigate(['/espacios']);
    let navLinkTable = $('#menu-principal .nav-link');
    for(let link of navLinkTable){
      if($(link).hasClass('colorN')){
        $(link).removeClass('colorN');
      }
    } 
    $('#lli6').addClass('colorN');

    let navLink = $('#navbar-movil .nav-link');
    for(let link of navLink){
      if($(link).hasClass('colorA')){
        $(link).removeClass('colorA');
      }
    }
    $('#lli1').addClass('colorA');
  }

  routerSalas(){
    this.router.navigate(['/salas']);
    let navLinkTable = $('#menu-principal .nav-link');
    for(let link of navLinkTable){
      if($(link).hasClass('colorN')){
        $(link).removeClass('colorN');
      }
    } 
    $('#lli7').addClass('colorN');

    let navLink = $('#navbar-movil .nav-link');
    for(let link of navLink){
      if($(link).hasClass('colorA')){
        $(link).removeClass('colorA');
      }
    }
    $('#lli2').addClass('colorA');
  }

  routerEscribenos(){
    this.router.navigate(['/escribenos']);
    let navLinkTable = $('#menu-principal .nav-link');
    for(let link of navLinkTable){
      if($(link).hasClass('colorN')){
        $(link).removeClass('colorN');
      }
    } 
    $('#lli10').addClass('colorN');

    let navLink = $('#navbar-movil .nav-link');
    for(let link of navLink){
      if($(link).hasClass('colorA')){
        $(link).removeClass('colorA');
      }
    }
    $('#lliE').addClass('colorA');
  }

  routerComunidad(data:any){
    this.router.navigate(['/comunidad'],{queryParams:{watch:data}});

    //NUEVO

    if(data == 1 || data == 2 || data == 3){

      if(data == 1){
        this.eliminar();
        $('.informacion-1').show();
        $('.informacion-2').hide();
        $('.informacion-3').hide();
    
        $('.comunidad-1').show();
        $('.comunidad-2').hide();
        $('.comunidad-3').hide();

        // primer icono select
        $('.comunidad1-1').hide();
        $('.comunidad1-2').show();

        $('.comunidad2-2').hide();
        $('.comunidad3-2').hide();
        $('.comunidad2-1').show();
        $('.comunidad3-1').show();
    
        $(`.div${data}`).addClass('myBackground3-active');
      }
      if(data == 2){
        this.eliminar();
        $('.informacion-2').show();
        $('.informacion-1').hide();
        $('.informacion-3').hide();
    
        $('.comunidad-2').show();
        $('.comunidad-1').hide();
        $('.comunidad-3').hide();

        // segundo icono select
        $('.comunidad2-1').hide();
        $('.comunidad2-2').show();

        $('.comunidad3-2').hide();
        $('.comunidad1-2').hide();
        $('.comunidad3-1').show();
        $('.comunidad1-1').show();
    
        $(`.div${data}`).addClass('myBackground3-active');
      }
  
      if(data == 3){
        this.eliminar();
        $('.informacion-3').show();
        $('.informacion-1').hide();
        $('.informacion-2').hide();
    
        $('.comunidad-3').show();
        $('.comunidad-1').hide();
        $('.comunidad-2').hide();

        // tercer icono select
        $('.comunidad3-1').hide();
        $('.comunidad3-2').show();

        $('.comunidad1-2').hide();
        $('.comunidad2-2').hide();
        $('.comunidad1-1').show();
        $('.comunidad2-1').show();
    
        $(`.div${data}`).addClass('myBackground3-active');
      }
    }

    //TERMINA NUEVO

    let navLinkTable = $('#menu-principal .nav-link');
    for(let link of navLinkTable){
      if($(link).hasClass('colorN')){
        $(link).removeClass('colorN');
      }
    } 
    $('#lli8').addClass('colorN');

    let navLink = $('#navbar-movil .nav-link');
    for(let link of navLink){
      if($(link).hasClass('colorA')){
        $(link).removeClass('colorA');
      }
    }
    $('#lli3').addClass('colorA');
  }

  eliminar(){
    let divMostrar = $('.mostrar-div');

    for(let div of divMostrar){
      $(div).removeClass('myBackground3-active');
    }
  }

}
