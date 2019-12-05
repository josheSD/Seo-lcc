import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComunidadService {

  constructor(
    public http:HttpClient
  ) { }

  getComunidad():Observable<any>{
    let url = `${environment.API_URL}/comunidad`;

    return this.http.get(url)
                    .pipe(
                      map((resp:any)=>{
                        return resp.comunidad;
                      }),
                      catchError((err:any)=>{
                        return throwError(err);
                      })
                    )
  }

}
