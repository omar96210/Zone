import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service } from '../services/service';
import { ToastrService } from "ngx-toastr";

@Component({
    moduleId: module.id,
    selector: 'Admin-cmp',
    templateUrl: 'Admin.component.html'
})

export class AdminComponent implements OnInit{


    constructor(
        public translate: TranslateService,
        public Service: Service,
        private toastr: ToastrService
        ) {

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
                this.toastr.error(
                    '<span data-notify="icon" class="nc-icon nc-simple-remove"></span><span data-notify="message">Your Data is not loadit ( Fake Data Only )</span>',
                      "",
                      {
                        timeOut: 4000,
                        enableHtml: true,
                        closeButton: true,
                        toastClass: "alert alert-danger alert-with-icon",
                        positionClass: "toast-top-center" 
                      }
                    );
            }
            );
    }

   
}
