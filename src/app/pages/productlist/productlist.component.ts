import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service } from '../services/service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch'
import 'rxjs/Rx';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'productlist-cmp',
    templateUrl: 'productlist.component.html'
})
export class productlistComponent implements OnInit {
    productfoods: any;


    productfoodslength: any;

    constructor(
        public translate: TranslateService,
        private fb: FormBuilder,
        public Service: Service,
        private http: HttpClient,
        private router: Router,
        private toastr: ToastrService
    ) {
        this.http = http;
    }

    productlist: any;
    productdata: any;


    ngOnInit() {
        this.Allproduct()

    }


    Allproduct() {

        this.Service.Getproduct()
            .then(data => {
                this.productlist = data;
                this.productfoods = this.productlist.foods;
                this.productfoodslength=this.productfoods.length;
                parseInt(this.productfoodslength)
                console.log("Result of productlist List", this.productlist);

            })
            .catch(error => {

            }
            );
    }
    paramSourceID:any;
    prodID:any
    changeParam(id) {
        this.paramSourceID=id;
        this.router.navigate(['/UpdateProductlist',this.paramSourceID]);

    }
    selectedid: any;
    saveid(id: any) {
        this.selectedid = id
    }
    deleteproductlistform() {
        this.Service.deleteproductlist(this.selectedid).subscribe(
            data => {
                console.log(data)
                this.Allproduct()
                $("#deleteproductlist").modal("hide")
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
                this.Allproduct()
                $("#deleteproductlist").modal("hide")
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
