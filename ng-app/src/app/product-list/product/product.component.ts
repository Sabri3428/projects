import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'product',
  templateUrl:'./product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
unselectProduct(arg0: Product) {
throw new Error('Method not implemented.');
}

  @Input() prd : Product
  @Output() unSelectEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  unSelectProduct(){
    this.unSelectEvent.emit();
  }

}
