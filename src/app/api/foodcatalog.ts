import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Foodcatalog {
  constructor(private http: HttpClient) {}

  private baseURL = "http://localhost:3000";

  public async testCallAPI() {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";

    const rxObservable = this.http.get<any>(apiUrl);

    return await firstValueFrom(rxObservable);
  }

  public async getTopLevelCatalog() {
    const rxObservable = this.http.get<any>(this.baseURL + "/categories");
    return await firstValueFrom(rxObservable);
  }
}
