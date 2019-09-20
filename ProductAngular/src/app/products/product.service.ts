import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { Product } from './product.entity';

@Injectable()

export class ProductService {
  products: Product[];
  constructor(private appservice:AppService)
  {

  }
  // products=[{
  //   "ProductID":"1",
  //   "Title":"Pen",
  //   "Price":10,
  //   "Color":"Red",
  //   "InStock":true,
  //   "Details":"Very Good pen",
  //   "Quantity":20,
  //   "Rating":2.2,
  //   "ExpiryDate":"2012",
  //   "ImageURL":"https://www.williampenn.net/pub/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/W/P/WP08039-a_10.jpg"
  // },
  // {
  //   "ProductID":"2",
  //   "Title":"Pencil",
  //   "Price":20,
  //   "Color":"Blue",
  //   "InStock":false,
  //   "Details":"Very Good Pencil",
  //   "Quantity":200,
  //   "Rating":4.2,
  //   "ExpiryDate":"2019",
  //   "ImageURL":"https://www.williampenn.net/pub/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/W/P/WP08039-a_10.jpg"
    
  // },
  // {
  //   "ProductID":"3",
  //   "Title":"Eraser",
  //   "Price":30,
  //   "Color":"White",
  //   "InStock":true,
  //   "Details":"Very Good Eraser",
  //   "Quantity":240,
  //   "Rating":2.6,
  //   "ExpiryDate":"2019",
  //   "ImageURL":"https://www.williampenn.net/pub/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/W/P/WP08039-a_10.jpg"
    
  // },
  // {
  //   "ProductID":"4",
  //   "Title":"Sharpner",
  //   "Price":46,
  //   "Color":"Green",
  //   "InStock":false,
  //   "Details":"Very Good Sharpner",
  //   "Quantity":420,
  //   "Rating":3.2,
  //   "ExpiryDate":"2020",
  //   "ImageURL":"https://www.williampenn.net/pub/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/W/P/WP08039-a_10.jpg"
    
  // },
  // {
  //   "ProductID":"5",
  //   "Title":"Notebook",
  //   "Price":140,
  //   "Color":"Black",
  //   "InStock":true,
  //   "Details":"Very Good Notebook",
  //   "Quantity":220,
  //   "Rating":4.2,
  //   "ExpiryDate":"2022",
  //   "ImageURL":"https://www.williampenn.net/pub/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/W/P/WP08039-a_10.jpg"
  // }
    
  // ];
  

 
  GetProductsById(id:any): Product{
    return this.products.find(p=>p.ProductID==id);
  }
  GetProducts(): Product[] {
    return this.products;

  }
}