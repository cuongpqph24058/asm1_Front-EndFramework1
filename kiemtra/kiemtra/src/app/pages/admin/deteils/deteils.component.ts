import { IProduct } from '../../../../interface/product';
import { Component } from '@angular/core';
import {ServicesService} from '../../../../services/services.service'

@Component({
  selector: 'app-deteils',
  templateUrl: './deteils.component.html',
  styleUrls: ['./deteils.component.scss']
})
export class DeteilsComponent {
 product! : IProduct[]
 constructor(private httpPro:ServicesService){
  this.httpPro.getProduct().subscribe(data=>{
    this.product=data
  })
 }

 onHandleSubmit(id:number){
  if(confirm("bạn có muốn xóa không")){
    this.httpPro.deleteProduct(id).subscribe(()=>{
      this.product = this.product.filter(products => products.id != id)
    })
  }

 }

}
