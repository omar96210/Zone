import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service } from '../services/service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'UpdateChoiceslist-cmp',
    templateUrl: 'UpdateChoiceslist.component.html'
})

export class UpdateChoiceslistComponent implements OnInit {
    selectedFile: File;
    url: any;
    public form!: FormGroup;
    NameForm: any;
    optionsSectionlist: any;
    optionsSectionlistid: number;
    image: any;
    errorMessage: any;
    priceForm: any;
    prosaid: any;


    constructor(
        public translate: TranslateService,
        public Service: Service,
        private http: HttpClient,
        private fb: FormBuilder,
        private router: Router,
        private toastr: ToastrService,
        private activatedRoute: ActivatedRoute

        ){
            this.activatedRoute.params.subscribe(params => {
                this.prosaid = params['id'];
               });
         }

    ngOnInit() {
        this.AlloptionsSection()
        this.form = this.fb.group({
            Name: [null, null],
            price: [null, null],
          });
    }
    AlloptionsSection() {

        this.Service.GetoptionsSection()
            .then(data => {
                this.optionsSectionlist = data;
                this.optionsSectionlist=this.optionsSectionlist.groups;
                console.log("Result of optionsSectionlist List", this.optionsSectionlist);
            })
            .catch(error => {

            }
            );
    }
    getoptionsSectionlistid(event: any) {
        this.optionsSectionlistid = event.target.selectedIndex - 1
        this.optionsSectionlistid = this.optionsSectionlist[this.optionsSectionlistid].id;
        console.log(this.optionsSectionlistid)
    }
    
    onFileSelected(event: any) {
        this.selectedFile = <File>event.target.files[0];
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
                        this.updatechoicesform()
                    }
                })
        }

    updatechoicesform() {
        this.NameForm = this.form.value.Name;
        this.priceForm = this.form.value.price;
        this.image="1.png"
 
        this.Service.updatechoices(this.prosaid,this.NameForm,this.priceForm,this.optionsSectionlistid,this.image).subscribe(
            data => {
                console.log(data)
                this.image = null;
                this.form = this.fb.group({
                    Name: [null, null],
                    price: [null, null],
                  });
                this.url = null
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
                  this.router.navigate(['/Choiceslist']);
            },
            err => {
                console.log(err)
                this.image = null;
                this.url = null
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



}
