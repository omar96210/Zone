import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service } from '../services/service';
import { ToastrService } from "ngx-toastr";


@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'Users.component.html'
})

export class UsersComponent implements OnInit{


    constructor(
        public translate: TranslateService,
        public Service: Service,
        private toastr: ToastrService) {

    }

    Userslist: any;
    Usersdata: any;


    ngOnInit() {
        this.AllUsers()

    }

    AllUsers() {

        this.Service.GetUsers()
            .then(data => {
                this.Userslist = data;
                console.log("Result of Userslist List", this.Userslist);

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


    notDone(){
        this.toastr.error(
            '<span data-notify="icon" class="nc-icon nc-simple-remove"></span><span data-notify="message">Not Done Yet</span>',
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
}
