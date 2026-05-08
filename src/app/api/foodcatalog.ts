import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Foodcatalog {
  constructor(private http: HttpClient) {}

  public async testCallAPI() {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

    const rxObservable = this.http.get<any>(apiUrl);

    return await firstValueFrom(rxObservable);
  }
}
