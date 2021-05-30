import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service } from '../services/service';

@Component({
    moduleId: module.id,
    selector: 'orders-cmp',
    templateUrl: 'orders.component.html'
})

export class ordersComponent implements OnInit{


    constructor(
        public translate: TranslateService,
        public Service: Service) {

    }

    orderslist: any;
    ordersdata: any;


    ngOnInit() {
        this.Allorders()

    }

    Allorders() {

        this.Service.Getorders()
            .then(data => {
                this.orderslist = data;
                console.log("Result of orderslist List", this.orderslist);
            })
            .catch(error => {

            }
            );
    }


    
}
