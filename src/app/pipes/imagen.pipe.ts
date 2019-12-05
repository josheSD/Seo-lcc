import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'imagen'
})

export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string): any {
    
    let url = `${environment.API_URL}/imagen`;
    
    if(!img){
      return url += `/usuarios/xxx`;
    }

    // if(img.indexOf('https') >= 0){
    //   return img;
    // }

    switch(tipo){
      case 'usuario':
         url += `/usuarios/${img}`;
        break;
      case 'blog':
          url += `/blogs/${img}`;
        break;
      case 'homes':
        url += `/home/${img}`;
        break;
      case 'espacios':
        url += `/espacios/${img}`;
        break;
      case 'salas':
        url += `/salas/${img}`;
        break;
      case 'comunidad':
        url += `/comunidad/${img}`;
        break;
      case 'nosotros':
        url += `/nosotros/${img}`;
        break;
      case 'escribenos':
        url += `/escribenos/${img}`;
        break;
      case 'menu':
        url += `/menu/${img}`;
        break;
      case 'footer':
        url += `/footer/${img}`;
        break;
      default: 
          url += `/usuarios/xxx`;
      }
      
    return url;
  }

}
