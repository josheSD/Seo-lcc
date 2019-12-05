import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EscribenosService } from '../../services/escribenos.service';
import { MatSnackBar } from '@angular/material';

declare var $:any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {
  //COMENTARIO
  
  public FormContacto = new FormGroup({
    'nombre': new FormControl(null),
    'apellido': new FormControl(null),
    'correo': new FormControl(null),
    'empresa': new FormControl(null),
    'celular': new FormControl(null),
    'servicio': new FormControl(null),

    //Campos que usa ZOHO
    'xnQsjsdp': new FormControl(null),
    'zc_gad': new FormControl(null),
    'xmIwtLD': new FormControl(null),
    'actionType': new FormControl(null),
    'returnURL': new FormControl(null),
    'Lead Source': new FormControl(null)
  })
  durationInSeconds = 5;

  constructor(
    public _escribenosService: EscribenosService,
    private _snackBar: MatSnackBar
  ) {
    
   }

  ngOnInit() {
  }

  SelectServicio(event){
    this.FormContacto.get('servicio').setValue(event.target.value);
  }

  postFormulario(){
    this._escribenosService.enviarMensaje(this.FormContacto.value)
        .subscribe(resp=>{
          console.log(resp);
          this.FormContacto.reset();
          this.openSnackBar('Enviado correctamente');
        },
        err=>{
          this.openSnackBar('Error, vuelva a intentar')
        })
  }

  openSnackBar(mensaje:string) {
    this._snackBar.open(mensaje,'Cerrar',{duration: 5000});
  }

  navbar(){
    $('#lli6').addClass('colorN')
  }

}
