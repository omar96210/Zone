import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service } from '../services/service';

@Component({
    moduleId: module.id,
    selector: 'Admin-cmp',
    templateUrl: 'Admin.component.html'
})

export class AdminComponent implements OnInit{


    constructor(
        public translate: TranslateService,
        public Service: Service) {

    }

    Adminlist: any;
    Admindata: any;


    ngOnInit() {
        this.AllAdmin()

    }

    AllAdmin() {

        this.Service.GetAdmin()
            .then(data => {
                this.Adminlist = data;
                console.log("Result of Adminlist List", this.Adminlist);

            })
            .catch(error => {

            }
            );
    }

   
}
