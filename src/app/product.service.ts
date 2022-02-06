import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<Product[]> {
    const url = 'assets/DATA.json';

    return this.httpClient.get<Product[]>(url);
  }
}
