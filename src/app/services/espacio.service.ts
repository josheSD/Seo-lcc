import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspacioService {

  constructor(
    public http: HttpClient
  ) { }

  getEspacios():Observable<any>{
    let url = `${environment.API_URL}/espacio`;
    return this.http.get(url)
                    .pipe(
                      map((resp:any)=>{
                        return resp.espacio;
                      }),
                      catchError((err:any)=>{
                        return throwError(err);
                      })
                    )
  }

}
