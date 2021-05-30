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
    selector: 'sliders-cmp',
    templateUrl: 'sliders.component.html'
})

export class slidersComponent implements OnInit {
    public form!: FormGroup;
    sliderslist: any;
    slidersdata: any;
    selectedFile: File;
    apiUrl: any;
    url: any;
    image: any;
    errorMessage: any;

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

    ngOnInit() {
        this.form = this.fb.group({
            Name: [null, null],
            Email: [null, null],
            Phone: [null, null],
        });
        this.Allsliders()

    }

    Allsliders() {
        this.Service.Getsliders()
            .then(data => {
                this.sliderslist = data;
                console.log("Result of sliderslist List", this.sliderslist);
            })
            .catch(error => {

            }
            );

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




    selectedid: any;
    saveid(id: any) {
        this.selectedid = id
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
                    this.AddSlider()

                },
                error: error => {
                    this.AddSlider()

                }
            })
    }


    AddSlider() {

        this.Service.Addslider(this.image).subscribe(
            data => {
                console.log(data)
                this.Allsliders()
                $("#AddSlider").modal("hide")
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
                this.Allsliders()
                $("#AddSlider").modal("hide")
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

    deletesliderform() {
        this.Service.deleteslider(this.selectedid).subscribe(
            data => {
                console.log(data)
                this.Allsliders()
                $("#deleteslider").modal("hide")
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
                this.Allsliders()
                $("#deleteslider").modal("hide")

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
