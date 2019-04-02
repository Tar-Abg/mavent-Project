import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  public array:Array<any>;
  public lang:string;
 

  getData(url) {
    return this.http.get(url)
    .pipe(
      catchError((error: any) => {
        console.log(error);
        return error;
      })
    );
  }
  
  setLang (lang: string) {
    this.lang = lang;
    localStorage.setItem('lang', lang);
    location.reload();
  }

  constructor(private http: HttpClient) {
    
    const lang = localStorage.getItem('lang');
    if (lang) {
      this.lang = lang;
    } else {
      localStorage.setItem('lang','ru');
      this.lang = "ru"
    }
    
  }
}