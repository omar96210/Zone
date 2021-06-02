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
    selector: 'categories-cmp',
    templateUrl: 'categories.component.html'
})

export class categoriesComponent implements OnInit {
    public form!: FormGroup;
    public formupdate!: FormGroup;

    categoriesfoods: any;
    selectedFile: any;
    url: string | ArrayBuffer;
    image: any;
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
    }

    categorieslist: any;
    categoriesdata: any;


    ngOnInit() {
        this.Allcategories()
        this.form = this.fb.group({
            Name1: [null, null],
        });
        this.formupdate = this.fb.group({
            Nameupdate: [null, null],
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
                    this.Addcategoryform()
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
                    this.updatecategoryform()
                }
            })
    }
// ##### End Upload Image #####

    selectedid: any;
    saveid(id: any) {
        this.selectedid = id
    }
    Addcategoryform() {
        this.NameForm = this.form.value.Name1;
        this.image="1.png"
        this.Service.Addcategory(this.image, this.NameForm, this.Status).subscribe(
            data => {
                console.log(data)
                this.Allcategories()
                $("#Addcategories").modal("hide")
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
                $("#Addcategories").modal("hide")
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
    updatecategoryform() {
        this.NameFormupdate = this.formupdate.value.Nameupdate;
        this.Service.updatecategory(this.selectedid,this.image, this.NameFormupdate,this.Statusedit).subscribe(
            data => {
                console.log(data)
                this.Allcategories()
                $("#update").modal("hide")
                this.toastr.success(
                    '<span data-notify="icon" class="nc-icon nc-check-2"></span><span data-notify="message">Your Data is updated success</span>',
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
                this.Allcategories()
                $("#update").modal("hide")
                this.toastr.error(
                    '<span data-notify="icon" class="nc-icon nc-simple-remove"></span><span data-notify="message">Your Data is not updated correctle</span>',
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
    deletecategoryform() {
        this.Service.deletecategory(this.selectedid).subscribe(
            data => {
                console.log(data)
                this.Allcategories()
                $("#deletecategories").modal("hide")
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
                this.Allcategories()
                $("#deletecategories").modal("hide")
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
