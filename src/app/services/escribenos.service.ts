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
export class EscribenosService {

  constructor(
    public http:HttpClient
  ) { }

  getEscribenos():Observable<any>{
    let url = `${environment.API_URL}/escribenos`;
    return this.http.get(url)
                    .pipe(
                      map((res:any)=>{
                        return res.escribenos;
                      }),
                      catchError((err:any)=>{
                        return throwError(err);
                      })
                    )
  }

  enviarMensaje(body:any):Observable<any>{
    // let url = `${environment.API_URL}/mensajeria/post`;
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'accept-charset':  'UTF-8'
    })
    let url = `https://crm.zoho.com/crm/WebToLeadForm`;
    return this.http.post(url,body,{headers})
                    .pipe(
                      map((resp:any)=>{
                        return resp;
                      }),
                      catchError((err:any)=>{
                        return throwError(err);
                      })
                    )
  }

}
