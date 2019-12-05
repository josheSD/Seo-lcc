import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComunidadService } from '../../services/comunidad.service';

declare var $:any;

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styles: []
})
export class ComunidadComponent implements OnInit {

  public monstrarQuery:any;

  mostrarSliderC1:number = 2;
  mostrarSliderC2:number = 2;
  mostrarSliderC3:number = 2;

  //Changes

  public propertyResponse;
  public objectTemporal:any = {};

  public articuloOpcional:boolean;
  constructor(
    public activatedRoute : ActivatedRoute,
    public router: Router,
    public _comunidadService: ComunidadService
  ) {}

  ngOnInit() {
    this.getComunidad();

    $('.sliderC1').hide();
    $('.sliderC1:first').show();
    $('.sliderC2').hide();
    $('.sliderC2:first').show();
    $('.sliderC3').hide();
    $('.sliderC3:first').show();

    $('.comunidad1-2').hide();
    $('.comunidad2-2').hide();
    $('.comunidad3-2').hide();

    if(!this.activatedRoute.snapshot.queryParams.watch){
      this.porDefectoMostrar();
      return
    }
    if(this.activatedRoute.snapshot.queryParams.watch){
      this.inicializar(this.activatedRoute.snapshot.queryParams.watch);
    }
  }

  getComunidad(){
    this._comunidadService.getComunidad()
        .subscribe(respuesta =>{
            if(respuesta[0] != null){
              this.articuloOpcional = respuesta[0].MostrarData4.TextoPublicada;
              this.propertyResponse = Object.keys(respuesta[0]);
              this.propertyResponse.forEach(row=>{
                if(row.indexOf('Imagen') >= 0){
                  this.objectTemporal[row] = respuesta[0][row];
                }
              })
            }
        })
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
  }

  DireccionC1(direccion:string){
    $('.sliderC1').hide();
    
    if(direccion == 'De'){
      this.mostrarSliderC1++;
      if(this.mostrarSliderC1 == 6){
        this.mostrarSliderC1 = 5;
      }
      $(`.sliderC1:nth-child(${this.mostrarSliderC1})`).fadeIn();
    }
    if(direccion == 'Iz'){
      this.mostrarSliderC1--;
      if(this.mostrarSliderC1 == 1){
        this.mostrarSliderC1 = 2
      }
      $(`.sliderC1:nth-child(${this.mostrarSliderC1})`).fadeIn();
    }
  }

  DireccionC2(direccion:string){
    $('.sliderC2').hide();
    
    if(direccion == 'De'){
      this.mostrarSliderC2++;
      if(this.mostrarSliderC2 == 6){
        this.mostrarSliderC2 = 5;
      }
      $(`.sliderC2:nth-child(${this.mostrarSliderC2})`).fadeIn();
    }
    if(direccion == 'Iz'){
      this.mostrarSliderC2--;
      if(this.mostrarSliderC2 == 1){
        this.mostrarSliderC2 = 2
      }
      $(`.sliderC2:nth-child(${this.mostrarSliderC2})`).fadeIn();
    }
  }

  DireccionC3(direccion:string){
    $('.sliderC3').hide();
    
    if(direccion == 'De'){
      this.mostrarSliderC3++;
      if(this.mostrarSliderC3 == 6){
        this.mostrarSliderC3 = 5;
      }
      $(`.sliderC3:nth-child(${this.mostrarSliderC3})`).fadeIn();
    }
    if(direccion == 'Iz'){
      this.mostrarSliderC3--;
      if(this.mostrarSliderC3 == 1){
        this.mostrarSliderC3 = 2
      }
      $(`.sliderC3:nth-child(${this.mostrarSliderC3})`).fadeIn();
    }
  }



  inicializar(data){

    if(data == 1 || data == 2 || data == 3){

      if(data == 1){
        $('.informacion-2').hide();
        $('.informacion-3').hide();
        $('.informacion-1').show();
    
        $('.comunidad-1').show();
        $('.comunidad-2').hide();
        $('.comunidad-3').hide();

        // primer icono select
        $('.comunidad1-1').hide();
        $('.comunidad1-2').show();
    
        $(`.div${data}`).addClass('myBackground3-active');
      }
      if(data == 2){
        $('.informacion-1').hide();
        $('.informacion-3').hide();
        $('.informacion-2').show();
    
        $('.comunidad-2').show();
        $('.comunidad-1').hide();
        $('.comunidad-3').hide();

        // segundo icono select
        $('.comunidad2-1').hide();
        $('.comunidad2-2').show();
    
        $(`.div${data}`).addClass('myBackground3-active');
      }
  
      if(data == 3){
        $('.informacion-1').hide();
        $('.informacion-2').hide();
        $('.informacion-3').show();
    
        $('.comunidad-3').show();
        $('.comunidad-1').hide();
        $('.comunidad-2').hide();

         // tercer icono select
         $('.comunidad3-1').hide();
         $('.comunidad3-2').show();
    
        $(`.div${data}`).addClass('myBackground3-active');
      }
    }else{
      this.porDefectoMostrar();
    }

  }

  porDefectoMostrar(){
      $('.informacion-1').show();
      $('.informacion-2').hide();
      $('.informacion-3').hide();
  
      $('.comunidad-1').show();
      $('.comunidad-2').hide();
      $('.comunidad-3').hide();

      // primer icono select
      $('.comunidad1-1').hide();
      $('.comunidad1-2').show();
  
      $('#p-div').addClass('myBackground3-active');
  }

  mostrarInformacion(valor:any,div:any){
    if(valor == '1'){
              this.eliminar();
              $(div).addClass('myBackground3-active');
              $('.comunidad-1').show();
              $('.comunidad-2').hide();
              $('.comunidad-3').hide();


              $('.informacion-1').show();
              $('.informacion-2').hide();
              $('.informacion-3').hide();

              // primer icono select
              $('.comunidad1-1').hide();
              $('.comunidad1-2').show();

              $('.comunidad2-2').hide();
              $('.comunidad3-2').hide();
              $('.comunidad2-1').show();
              $('.comunidad3-1').show();
              return
    }
    if(valor == '2'){
      
              this.eliminar();
              $(div).addClass('myBackground3-active');
              $('.comunidad-2').show();
              $('.comunidad-1').hide();
              $('.comunidad-3').hide();

              $('.informacion-2').show();
              $('.informacion-1').hide();
              $('.informacion-3').hide();

              // segundo icono select
              $('.comunidad2-1').hide();
              $('.comunidad2-2').show();

              $('.comunidad3-2').hide();
              $('.comunidad1-2').hide();
              $('.comunidad3-1').show();
              $('.comunidad1-1').show();
              return
    }
    if(valor == '3'){
              this.eliminar();
              $(div).addClass('myBackground3-active');
              $('.comunidad-3').show();
              $('.comunidad-1').hide();
              $('.comunidad-2').hide();

              $('.informacion-3').show();
              $('.informacion-1').hide();
              $('.informacion-2').hide();

              // tercer icono select
              $('.comunidad3-1').hide();
              $('.comunidad3-2').show();

              $('.comunidad1-2').hide();
              $('.comunidad2-2').hide();
              $('.comunidad1-1').show();
              $('.comunidad2-1').show();
              return
    }
  }

  eliminar(){
    let divMostrar = $('.mostrar-div');

    for(let div of divMostrar){
      $(div).removeClass('myBackground3-active');
    }

  }
  

}
