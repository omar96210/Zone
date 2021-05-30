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
    selector: 'AddMarket-cmp',
    templateUrl: 'AddMarket.component.html'
})

export class AddMarketComponent implements OnInit {
    public form!: FormGroup;
    selectedFile: File;
    url: any;
    field_id: any;
    ShopsListid: any;
    image: any;
    errorMessage: any;
    titleForm: any;
    detailsForm: any;
    priceForm: any;
    Status: any;
    userid: any;
    fieldslist: any;
    balance: any;
    lat: any;
    lng: any;
    addressForm: any;
    phoneForm: any;
    mobileForm: any;
    rate: number;
    order_count: number;
    picks: number;

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

    ngOnInit() {
        this.Allfields()
        this.form = this.fb.group({
            Name: [null, null],
            OwnerName: [null, null],
            phone: [null, null],
            location: [null, null],
            details: [null, null],          
        });
    }

    Allfields() {
        this.Service.Getfields()
            .then(data => {
                this.fieldslist = data;
                console.log("Result of fieldslist List", this.fieldslist);
            })
            .catch(error => {

            }
            );
    }

    getcategorieslistid(event: any) {
        this.field_id = event.target.selectedIndex - 1
        this.field_id = this.fieldslist[this.field_id].id;
        console.log(this.field_id)
    }
    GetStatus(event: any) {
        this.Status = event.target.value
        console.log(this.Status)
    }
    onFileSelected(event: any) {
        this.selectedFile = <File>event.target.files[0];
        console.log(this.selectedFile)
    }
    Addupload() {
        let formDataAddimage: FormData = new FormData();
        formDataAddimage.append('file', this.selectedFile);
        return this.http.post('http://tall3ah.site/image/upload', formDataAddimage)
            .subscribe({
                next: data => {
                    console.log(data)
                    this.image = data.toString;
                    console.log(this.image)

                },
                error: error => {
                    this.errorMessage = error.message;
                    console.error('There was an error!', error);
                    this.Addmarketform()
                }
            })
    }

    Addmarketform() {
        this.titleForm = this.form.value.Name;
        this.addressForm= this.form.value.location;
        this.phoneForm= this.form.value.phone;
        this.mobileForm= this.form.value.phone;
        this.detailsForm= this.form.value.details;
        this.rate=0
        this.order_count=0
        this.picks=0
        this.lat=0;
        this.lng=0;
        this.balance=0;
        this.userid=1;
        this.image="1.png"
        this.Service.Addmarket(this.titleForm,this.userid,this.balance,this.image,this.field_id,this.lat,this.lng,this.addressForm,this.phoneForm,this.mobileForm,this.Status,this.rate,this.order_count,this.picks,this.detailsForm).subscribe(
            data => {
                console.log(data)
                this.image = null;
                this.form = this.fb.group({
                    Name: [null, null],
                    details: [null, null],
                    price: [null, null],
                });
                this.url = null
                this.toastr.success(
                    '<span data-notify="icon" class="nc-icon nc-check-2"></span><span data-notify="message">Your Data is saved success</span>',
                    "",
                    {
                      timeOut: 4000,
                      closeButton: true,
                      enableHtml: true,
                      toastClass: "alert alert-success alert-with-icon",
                      positionClass: "toast-top-center" 
                    }
                  );
                  this.router.navigate(['/ShopsList']);
            },
            err => {
                console.log(err)
                this.image = null;
                this.url = null
                this.toastr.error(
                    '<span data-notify="icon" class="nc-icon nc-simple-remove"></span><span data-notify="message">Your Data is not saved correctle</span>',
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
