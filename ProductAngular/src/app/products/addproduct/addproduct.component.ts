import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Product.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Product } from '../product.entity';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  title = "Add Product in Database";
  model: Product;
  addProductForm:FormGroup;


  constructor(private route :ActivatedRoute,private appservice:AppService, private fb:FormBuilder, private router:Router) {
    this.model = new Product();
  }
  saveProduct() {
    //for sending to API
    //console.log(loginForm.value);

    //for checking status
    //console.log(loginForm.status);  
  }
  setDefault(){
    this.addProductForm.setValue({
      ProductID:"",
      Title:"",
      Price:"",
      Color:"",
      Quantity:"",
      Details:"",
      ExpiryDate:"",
      ImageURL:"",
      inStock:"",
      Rating:""
        });

  }

  ngOnInit() {
    

    //this.producttoedit=this.sc.getProductsById(this.productidtoedit);
   // console.log(this.producttoedit);
    this.addProductForm=new FormGroup({
      ProductID:new FormControl(),
      Title:new FormControl(),
      Price: new FormControl(),
      Color:new FormControl(),
      Quantity:new FormControl(),
      Details:new FormControl(),
      ExpiryDate:new FormControl(),
      ImageURL:new FormControl(),
      inStock:new FormControl(),
      Rating:new FormControl()
    })
 
  }
  prod:Product;
  addProduct(){
    console.log(this.addProductForm.value);
    //this.addProductForm.value
    this.appservice.addProduct(this.addProductForm.value).subscribe(data=>{
      this.prod=data;
      console.log(this.prod);
    });
    this.router.navigate(['products']);
  }
  Goback():void{
    this.router.navigate(['products'])
  }
}



