import { AppComponent } from './../../app.component';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { MenuService } from '../../services/menu.service';

declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  //Changes

  public propertyResponse;
  public objectTemporal:any = {};

  scroolTop:number = 0;
  contador:number = 0;

  activarIlusion:boolean=false;
  anchoVentana:any;

  langs:any[] = [
    {nombre:'Esp',value:'es'},
    {nombre:'Eng',value:'en'}
  ];

  liPintar:any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public _app : AppComponent,
    public location: Location,
    public _menuService: MenuService
  ) { 
  }

  @HostListener("window:scroll", [])
  @HostListener('window:resize', [])

  ngOnInit() {
    this.getNavbar();

    $('#logo-1').show();
    $('#logo-2').hide();
    this.anchoVentana = $('#navbar').width();
    this.eventoRuta();
    this.onResize($('#navbar').width());
  }

  getNavbar(){
    this._menuService.getMenu()
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

  CloseOpenNav(){

    if($('#btnNav2').hasClass('mostrar')){
      $('#btnNav2').addClass('d-none');
      $('#btnNav2').removeClass('mostrar');
      $('#btnNav').removeClass('d-none');
    }

    if($('#btnNav').hasClass('mostrar')){

      $('#btnNav').removeClass('mostrar');
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";

    }else{

      $('#btnNav').addClass('d-none');
      $('#btnNav2').removeClass('d-none');
      $('#btnNav2').addClass('mostrar');

      $('#btnNav').addClass('mostrar');
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("main").style.marginLeft = "-50%";
    }

  }


  cambiarIdioma(idioma:any){
    $('.label-navbar').hide();

    this._app.changeLang(idioma);
  }

  cambiarIdioma2(idioma:any){
    $('.label-cell').hide();
    this._app.changeLang(idioma);
  }



  onResize(event?:any) {

    this.anchoVentana = event;

    if(this.anchoVentana <= 735){
      this.conFondoNav();
      this.activarIlusion = false;
    }
    
  }

  eventoRuta(parametro?:any){

    if(parametro){
      $(window).scrollTop(0);
    }

    if((this.location.prepareExternalUrl(this.location.path()) == '/' || parametro) && this.anchoVentana > 735){

      this.Pintar($('#p-logo'),3);
      this.sinFondoNav();
      this.activarIlusion = true;
      this.MaterialSelectBlanco();

      $('.ng-star-inserted').removeClass('t-black');
      $('.ng-star-inserted').addClass('t-white');

      return
    }else{
      // NAVBAR TABLE PARA OTRAS VISTAS QUE NO SEA HOME
      $('.ng-star-inserted').removeClass('t-white');
      $('.ng-star-inserted').addClass('t-black');

      this.activarIlusion = false;
      this.MaterialSelectNegro();
      this.conFondoNav();

      return
    }

  }

  EventoScrollBottom(event:any){

    let scrollOffset:any = $(window).scrollTop();
  
    if(scrollOffset >= 100){
      this.conFondoNav();
      this.MaterialSelectNegro();

       // NAVBAR TABLE LAPTO
      $('.ng-star-inserted').removeClass('t-white');
      $('.ng-star-inserted').addClass('t-black');
      
    }

    if(scrollOffset <= 99 && this.activarIlusion){
      this.sinFondoNav();
      this.MaterialSelectBlanco();

      // NAVBAR TABLE LAPTO 
      $('.ng-star-inserted').removeClass('t-black');
      $('.ng-star-inserted').addClass('t-white');
    }

    // MAT SELECT NAVBAR TABLE LAPTO  NO PERDER COLOR
    // $('.mat-option-text').addClass('color-black');

  }

  MaterialSelectBlanco(){
      /* SELECT MATERIAL */
      $('.ng-tns-c2-1').removeClass('t-black');
      $('.ng-tns-c2-1').addClass('t-white');
  
      $('.imagen-navbar1').hide();
      $('.imagen-navbar2').show();


      $('.mat-select-arrow').removeClass('t-black');
      $('.mat-select-arrow').addClass('t-white');
  }

  MaterialSelectNegro(){
      /* SELECT MATERIAL */
      $('.ng-tns-c2-1').removeClass('t-white');
      $('.ng-tns-c2-1').addClass('t-black');

      $('.imagen-navbar2').hide();
      $('.imagen-navbar1').show();

      $('.mat-select-arrow').removeClass('t-white');
      $('.mat-select-arrow').addClass('t-black');
  }

  sinFondoNav(){
      $('#navbar').removeClass('navbar-color');
      $('.nav-link').removeClass('t-black');
      $('.nav-link').addClass('t-white');
      $('#logo-1').show();
      $('#logo-2').hide();
  }

  conFondoNav(){
      $('#navbar').addClass('navbar-color');
      $('.nav-link').addClass('t-black');
      $('#logo-1').hide();
      $('#logo-2').show();

      
      $('.m-label').removeClass('t-white');
      $('.m-label').addClass('t-black');

  }

  Pintar(li:any,opcion:number){
    //celular
    if(opcion == 1){
      this.liPintar = li;
      let navLink = $('.nav-link');
      for(let link of navLink){
        if($(link).hasClass('colorA')){
          $(link).removeClass('colorA');
        }
      }
      $(this.liPintar).addClass('colorA');
    }

    if(opcion == 2){
      let navLinkTable = $('#menu-principal .nav-link');
      for(let link of navLinkTable){
        if($(link).hasClass('colorN')){
          $(link).removeClass('colorN');
        }
      }
      
      let pintarNavbarTable =  $(li)[0];
      $(pintarNavbarTable).removeClass('t-white');
      $(pintarNavbarTable).removeClass('t-black');
      $(pintarNavbarTable).addClass('colorN');
    }

    if(opcion == 3){
      let navLink = $('.nav-link');
      for(let link of navLink){
        if($(link).hasClass('colorA')){
          $(link).removeClass('colorA');
        }
      }
      let navLinkTable = $('#menu-principal .nav-link');
      for(let link of navLinkTable){
        if($(link).hasClass('colorN')){
          $(link).removeClass('colorN');
        }
      }
    }

  }



}
