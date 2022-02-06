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
  visible: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getData().subscribe(data => {
      this.products = data;
    })
  }

  onClick(product: any) {
    this.visible = true;
  }

  onClickClose() {
    this.visible = false;
  }
}
