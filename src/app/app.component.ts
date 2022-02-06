import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Artcom';
  products: any = [];
  selected: boolean = false;
  productKeys!: any[];
  productValues!: any[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getData().subscribe(data => {
      this.products = data;
    })
  }

  onClick(product: any) {
    this.selected = true;
    this.productKeys = Object.keys(product);
    this.productValues = Object.values(product).map(e => e !== null ? e : 'it\'s unknown');
  }

  onClickClose() {
    this.selected = false;
  }
}
