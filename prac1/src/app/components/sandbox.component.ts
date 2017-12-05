import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({

  selector: 'sandbox',
  template: '<h1>Hello World</h1>'

})

export class SandboxComponent {

  customer:Customer;
  customer:Customer[];


    constructor(){
      this.customer = {
        id:2,
        name: 'shah jahan',
        email: 'jahnashah43@gmail.com'
      }
      this.customer = [

        {
          id:4,
          name: ' jahan Shah',
          email: 'jahnashah@gmail.com'
        },
        {
          id:3,
          name: 'shah',
          email: 'shah43@gmail.com'
        },
        {
          id:2,
          name: 'shah g',
          email: 'shahg1@gmail.com'
        }

        ];
}
}


