import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaService } from '../../services/sala.service';
import { SeoService } from 'src/app/services/seo.service';
import { Title } from '@angular/platform-browser';

declare var $:any;

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styles: []
})
export class SalasComponent implements OnInit {

  //Changes

  public propertyResponse;
  public objectTemporal:any = {};
  
  public articuloOpcional:boolean;
  constructor(
    public router: Router,
    public _salaService: SalaService,
    public _seoService: SeoService,
    public title: Title
  ) { }

  ngOnInit() {
    this.getSala();    
  }

  getSala(){
    this._salaService.getSalas()
        .subscribe(respuesta =>{
          if(respuesta[0] != null){
            this.articuloOpcional = respuesta[0].MostrarData3.TextoPublicada;
            this.propertyResponse = Object.keys(respuesta[0]);
            this.propertyResponse.forEach(row=>{
              if(row.indexOf('Imagen') >= 0){
                this.objectTemporal[row] = respuesta[0][row];
              }
            })
          }
        })
  }

  routerContacto(){
    this.router.navigate(['/escribenos']);
    let navLinkTable = $('#menu-principal .nav-link');
    for(let link of navLinkTable){
      if($(link).hasClass('colorN')){
        $(link).removeClass('colorN');
      }
    }
    $('#lli10').addClass('colorN')
  }

  aleatorio(elemento:any){

    if($(elemento).hasClass('cross-palo')){
       $(elemento).removeClass('cross-palo');
       $(elemento).addClass('cross');
    }else{
      $(elemento).removeClass('cross');
      $(elemento).addClass('cross-palo')
    }

  }

}
