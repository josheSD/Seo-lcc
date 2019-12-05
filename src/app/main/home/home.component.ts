import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselComponent } from 'ngx-bootstrap/carousel/carousel.component';
import { HomeService } from '../../services/home.service';

declare var google:any;
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  mostrarSlider:number = 2;

  mostrarSliderEmpresa:number = 0;

  mostrarSliderEmpresasTablet:any[] = [1,2,3,4,5,6];

  //ciudad
  public slidesCiudad: { image: string }[] = [];
  public activeSlideIndexCiudad = 0;

  //ciudad celular
  public slidesCiudadCelular: { image: string }[] = [];
  public activeSlideIndexCiudadCelular = 0; 

  //marcas
  public itemsPerSlide:number;
  public singleSlideOffset = true;
  public slidesMarca: {image:string}[] = [];

  //Viewport
  public anchoVentana:any;
  @ViewChild('carouselMarca',{static:true}) carouselMarca: CarouselComponent;


  //Changes

  public propertyResponse;
  public objectTemporal:any = {};

  constructor(
    public router:Router,
    public _homeService: HomeService
  ){}
  
  ngOnInit() {
    this.getHome();

    this.onResize($(window).innerWidth());

    $('.slider').hide();
    $('.slider:first').show();

  }

  getHome(){

    this._homeService.getHome()
          .subscribe(respuesta =>{
            if(respuesta[0] != null){
              this.propertyResponse = Object.keys(respuesta[0]);
              this.propertyResponse.forEach((row,index)=>{
                if(row.indexOf('Imagen') >= 0){
                  this.objectTemporal[row] = respuesta[0][row];
                }
                if(row.indexOf('CiudadImagen') >= 0){
                  this.slidesCiudad.push({image:`${respuesta[0][row].ImagenPublicada}`});
                  this.slidesCiudadCelular.push({image:`${respuesta[0][row].ImagenPublicada}`});
                }
                if(row.indexOf('CiudadsubImagen') >= 0){
                  this.slidesMarca.push({image:`${respuesta[0][row].ImagenPublicada}`});
                }

              })

              if(this.objectTemporal.ComunidadSubImagen1white){
                $('.comunidad1-2').addClass('display-none');
                $('.comunidad2-2').addClass('display-none');
                $('.comunidad3-2').addClass('display-none');
              }

             }
      })
  }

  onResize(event?:any) {

    this.anchoVentana = event;

    if(this.anchoVentana <= 425){
      this.itemsPerSlide = 2;
    }

    if(this.anchoVentana > 425){
      this.itemsPerSlide = 6;
    }
    
  }

  Izquierda(){
    this.carouselMarca.previousSlide(true);
  }

  Derecha(){
    this.carouselMarca.nextSlide(true);
  }

  Direccion(direccion:string){
    $('.slider').hide();

    if(direccion == 'De'){
      this.mostrarSlider++;
      if(this.mostrarSlider == 6){
        this.mostrarSlider = 5;
      }
      $(`.slider:nth-child(${this.mostrarSlider})`).fadeIn();
    }
    if(direccion == 'Iz'){
      this.mostrarSlider--;
      if(this.mostrarSlider == 1){
        this.mostrarSlider = 2
      }
      $(`.slider:nth-child(${this.mostrarSlider})`).fadeIn();
    }
  }

  routerEspacio(){
    this.router.navigate(['/espacios']);
    $('#lli6').addClass('colorN');
  }

  routerSala(){
    this.router.navigate(['/salas']);
    $('#lli7').addClass('colorN');
  }

  Comunidad(data:any){
    this.router.navigate(['/comunidad'],{queryParams:{watch:data}});
    $('#lli8').addClass('colorN');
  }

  SalirInformacion(){
    $('.comunidad1-2').hide();
    $('.comunidad2-2').hide();
    $('.comunidad3-2').hide();

    $('.comunidad1-1').show();
    $('.comunidad2-1').show();
    $('.comunidad3-1').show();

    let cajas = $('.caja');

    for(let caja of cajas){
      if($(caja).hasClass('caja-hover')){
        $(caja).removeClass('caja-hover')
      }
    }
  }

  CambiarInformacion(data:any){
    let cajaSeleccionada = $('.caja')[(data-1)];

    $(cajaSeleccionada).addClass('caja-hover');

    if(data == '1'){
      // primer icono select
      $('.comunidad1-1').hide();
      $('.comunidad1-2').show();

      $('.comunidad2-2').hide();
      $('.comunidad3-2').hide();
      $('.comunidad2-1').show();
      $('.comunidad3-1').show();
      return
    }
    if(data == '2'){

      // segundo icono select
      $('.comunidad2-1').hide();
      $('.comunidad2-2').show();

      $('.comunidad3-2').hide();
      $('.comunidad1-2').hide();
      $('.comunidad3-1').show();
      $('.comunidad1-1').show();
      return
    }

    if(data == '3'){

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


}
