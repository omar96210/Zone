import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service } from '../services/service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch'
import 'rxjs/Rx';
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'UpdateProductlist-cmp',
    templateUrl: 'UpdateProductlist.component.html'
})

export class UpdateProductlistComponent implements OnInit {
    public form!: FormGroup;
    selectedFile: File;
    url: any;
    productmarkets: any;
    productlist: any;
    productcategories: any;
    categorieslistid: any;
    ShopsListid: any;
    image: () => string;
    errorMessage: any;
    NameForm: any;
    detailsForm: any;
    priceForm: any;
    selectProducts: any;
    selectedProducts:any;
    datatest:any
    name: string;
    prosaid:any
    productfoods: any;
    productfoodslength: any;
    paramSourceID: any;
    prodID: number;
    categorieslist: unknown;
    marketslist: unknown;
    constructor(
        public translate: TranslateService,
        private fb: FormBuilder,
        public Service: Service,
        private http: HttpClient,
        private router: Router,
        private toastr: ToastrService,
        private activatedRoute: ActivatedRoute
    ) {
        this.http = http;
        this.activatedRoute.params.subscribe(params => {
            this.prosaid = params['id'];
            
            
           });
    }
    ngOnInit() {
        this.Allcategories()
        this.Allmarkets()

        this.form = this.fb.group({
            Name: [null, null],
            details: [null, null],
            price: [null, null],
            categorieslist: [null, null],
            ShopsList: [null, null],
        });
      

    }
    
    
    Allcategories() {

        this.Service.Getcategories()
            .then(data => {
                this.categorieslist = data;

                console.log("Result of categorieslist List", this.categorieslist);

            })
            .catch(error => {

            }
            );
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

    setformupdate(){
        this.form.controls['Name'].setValue(this.productfoods[this.prodID].name);
        this.form.controls['details'].setValue(this.productfoods[this.prodID].desc);
        this.form.controls['price'].setValue(this.productfoods[this.prodID].price);
        this.form.controls['categorieslist'].setValue(this.productfoods[this.prodID].category_id);
        this.form.controls['ShopsList'].setValue(this.productfoods[this.prodID].market_id);

        this.categorieslistid=this.productfoods[this.prodID].category_id
        this.ShopsListid=this.productfoods[this.prodID].market_id
        
    }
    onFileSelected(event: any) {
        this.selectedFile = <File>event.target.files[0];
        console.log(this.selectedFile)

        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.readAsDataURL(event.target.files[0]); // read file as data url

            reader.onload = (event) => { // called once readAsDataURL is completed
                this.url = event.target.result;
            }
        }
    }
 
    getcategorieslistid(event: any) {
        this.categorieslistid = event.target.selectedIndex - 1
        this.categorieslistid = this.categorieslist[this.categorieslistid].id;
        console.log(this.categorieslistid)
    }
    getShopsListid(event: any) {
        this.ShopsListid = event.target.selectedIndex - 1
        this.ShopsListid = this.marketslist[this.ShopsListid].id;
        console.log(this.ShopsListid)
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
                    this.updateproductlistform()
                }
            })
    }

    updateproductlistform() {
        this.NameForm = this.form.value.Name;
        this.detailsForm = this.form.value.details;
        this.priceForm = this.form.value.price;

        this.Service.updateproductlist(parseInt(this.prosaid),this.image, this.NameForm, this.categorieslistid, this.ShopsListid, this.detailsForm, this.priceForm).subscribe(
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
                  this.router.navigate(['/productlist']);
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
