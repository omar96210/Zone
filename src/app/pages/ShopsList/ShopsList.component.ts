import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service } from '../services/service';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'ShopsList-cmp',
    templateUrl: 'ShopsList.component.html'
})
export class ShopsListComponent implements OnInit{
    paramSourceID: any;

    constructor(
        public translate: TranslateService,
        public Service: Service,
        private router: Router, 
        private toastr: ToastrService
        ) {
            

    }

    marketslist: any;
    marketsdata: any;


    ngOnInit() {
        this.Allmarkets()

    }

    Allmarkets() {

        this.Service.Getmarkets()
            .then(data => {
                this.marketslist = data;
                console.log("Result of marketslist List", this.marketslist);
            })
            .catch(error => {

            }
            );
    }


    changeParam(id) {
        this.paramSourceID=id;
        this.router.navigate(['/UpdateMarket',this.paramSourceID]);

    }
    selectedid: any;
    saveid(id: any) {
        this.selectedid = id
    }
    deletemarketsform() {
        this.Service.deletemarkets(this.selectedid).subscribe(
            data => {
                console.log(data)
                this.Allmarkets()
                $("#deletemarkets").modal("hide")
                this.toastr.success(
                    '<span data-notify="icon" class="nc-icon nc-check-2"></span><span data-notify="message">Your Data is Deleted success</span>',
                    "",
                    {
                      timeOut: 4000,
                      closeButton: true,
                      enableHtml: true,
                      toastClass: "alert alert-success alert-with-icon",
                      positionClass: "toast-top-center" 
                    }
                  );
            },
            err => {
                console.log(err)
                this.Allmarkets()
                $("#deletemarkets").modal("hide")
                this.toastr.error(
                    '<span data-notify="icon" class="nc-icon nc-simple-remove"></span><span data-notify="message">Your Data is not Deleted correctle</span>',
                      "",
                      {
                        timeOut: 4000,
                        enableHtml: true,
                        closeButton: true,
                        toastClass: "alert alert-danger alert-with-icon",
                        positionClass: "toast-top-center" 
                      }
                    );

            });
    }
}
