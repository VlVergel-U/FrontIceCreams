import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { icecream } from '../models/ice_cream.model';

@Injectable({
  providedIn: 'root'
})
export class IceCreamService {
  
  url = environment.url;

  constructor(private http: HttpClient) { }

  createIceCream(icecreamData: icecream): Observable<boolean> {
    return this.http.post<{ success: boolean, msg: string, data: icecream[] }>(`${this.url}/api/iceCream`, icecreamData)
      .pipe(
        map(response => response.success)
      );
  }
  

  getOneIceCream(id: string): Observable<icecream> {
    return this.http.get<{ success: boolean, msg: string, data: icecream[] }>(`${this.url}/api/iceCreamUnique/${id}`)
      .pipe(
        map(response => response.data[0])
      );
  }
  

  getAllIceCreams(): Observable<icecream[]> {
    return this.http.get<{ success: boolean, msg: string, data: icecream[] }>(`${this.url}/api/iceCream`)
      .pipe(
        map(response => response.data)
      );
  }

  deleteIceCream(id: string): Observable<boolean> {
    return this.http.delete<{ success: boolean, msg: string, data: icecream[] }>(`${this.url}/api/iceCream/${id}`)
      .pipe(
        map(response => response.success)
      );
  }

  modifyIceCream(id: string, icecreamData: icecream): Observable<boolean> {
    return this.http.put<{ success: boolean, msg: string, data: icecream[] }>(`${this.url}/api/iceCream/${id}`, icecreamData)
      .pipe(
        map(response => response.success)
      );
  }
}
