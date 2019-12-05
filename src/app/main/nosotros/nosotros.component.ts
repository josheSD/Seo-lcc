import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NosotroService } from '../../services/nosotro.service';

declare var $:any;

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styles: []
})
export class NosotrosComponent implements OnInit {

  //Changes

  public propertyResponse;
  public objectTemporal:any = {};

  constructor(
    public router: Router,
    public _nosotrosService: NosotroService
  ) { }

  ngOnInit() {
    this.getNosotros();
  }

  getNosotros(){
    this._nosotrosService.getNosotros()
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

}
