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
    selector: 'Shopscategorie-cmp',
    templateUrl: 'Shopscategorie.component.html'
})

export class ShopscategorieComponent implements OnInit{
    public form!: FormGroup;
    public formupdate!: FormGroup;

    selectedFile: any;
    url: any;
    apiUrl: string;
    image: () => string;
    errorMessage: any;
    NameForm: any;
    NameFormupdate: any;
    Status: any;
    Statusedit: any;


    constructor(
        public translate: TranslateService,
        private fb: FormBuilder,
        public Service: Service,
        private http: HttpClient,
        private router: Router,
        private toastr: ToastrService

    ) {
        this.http = http;
        this.apiUrl = 'http://tall3ah.site/image/upload';
    }

    fieldslist: any;
    fieldsdata: any;


    ngOnInit() {
        this.Allfields()
        this.form = this.fb.group({
            Name1: [null, null],
        });
        this.formupdate = this.fb.group({
            Nameupdate: [null, null],
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


// ##### Toggle btn status #####
GetStatus(event: any) {
    this.Status = event.target.value
    console.log(this.Status)
}


GetStatusedit(event: any) {
    this.Statusedit = event.target.value
    console.log(this.Statusedit)
}
// ##### End Toggle btn status #####






// ##### upload Image #####
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
                this.Addshopcategoryform()
            }
        })
}
updateupload() {
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
                this.updateshopcategoryform()
            }
        })
}
// ##### End Upload Image #####

selectedid: any;
saveid(id: any) {
    this.selectedid = id
}

Addshopcategoryform() {
    this.NameForm = this.form.value.Name1;
    this.Service.Addshopcategory(this.image, this.NameForm, this.Status).subscribe(
        data => {
            console.log(data)
            this.Allfields()
            $("#Addshopcategories").modal("hide")
            this.image=null;
            this.form = this.fb.group({
                Name1: [null, null],
            });
            this.url=null
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
        },
        err => {
            console.log(err)
            this.Allfields()
            $("#Addshopcategories").modal("hide")
            this.image=null;
            this.url=null
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
updateshopcategoryform() {
    this.NameFormupdate = this.formupdate.value.Nameupdate;
    this.Service.updateshopcategory(this.selectedid,this.image, this.NameFormupdate,this.Statusedit).subscribe(
        data => {
            console.log(data)
            this.Allfields()
            $("#updateshopcategories").modal("hide")
        },
        err => {
            console.log(err)
            this.Allfields()
            $("#updateshopcategories").modal("hide")

        });
}
deleteshopcategoryform() {
    this.Service.deleteshopcategory(this.selectedid).subscribe(
        data => {
            console.log(data)
            this.Allfields()
            $("#deleteshopcategories").modal("hide")
            this.toastr.success(
                '<span data-notify="icon" class="nc-icon nc-check-2"></span><span data-notify="message">Your Data is deleted</span>',
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
            this.Allfields()
            $("#deleteshopcategories").modal("hide")


            this.toastr.error(
                '<span data-notify="icon" class="nc-icon nc-simple-remove"></span><span data-notify="message">Your Data is not deleted correctle</span>',
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
