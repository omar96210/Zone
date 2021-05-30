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
    selector: 'Choices-cmp',
    templateUrl: 'Choices.component.html'
})

export class ChoicesComponent implements OnInit{
    public form!: FormGroup;
    public formEdit!: FormGroup;
    optionsSectionfoods: any;
    NameForm: any;
    NameFormupdate: any;
    productlist: any;
    productfoods: any;

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
    optionsSectionlist: any;
    optionsSectiondata: any;


    ngOnInit() {
        this.AlloptionsSection()
        this.Allproduct()

        this.form = this.fb.group({
            Name: [null, null],
        });
        this.formEdit = this.fb.group({
            NameformEdit: [null, null],
            productlist: [null, null],
        });
        
    }
    Allproduct() {

        this.Service.Getproduct()
            .then(data => {
                this.productlist = data;
                this.productfoods = this.productlist.foods;

            })
            .catch(error => {

            }
            );
    }
    AlloptionsSection() {

        this.Service.GetoptionsSection()
            .then(data => {
                this.optionsSectionlist = data;
                this.optionsSectiondata=this.optionsSectionlist.groups
                this.optionsSectionfoods=this.optionsSectionlist.foods

                console.log("Result of optionsSectionlist List", this.optionsSectionlist);
            })
            .catch(error => {

            }
            );
    }

    optionslistid:any;
    getoptionslistid(event: any) {
        this.optionslistid = event.target.selectedIndex - 1
        this.optionslistid = this.productfoods[this.optionslistid].id;
        console.log(this.optionslistid)
    }   

    selectedid: any;
    saveid(id: any) {
        this.selectedid = id
    }


    Addoptionslistform() {
        this.NameForm = this.form.value.Name;
        this.Service.Addoptionslist(this.optionslistid, this.NameForm).subscribe(
            data => {
                console.log(data)
                this.AlloptionsSection()
                $("#AddChoices").modal("hide")
                this.form = this.fb.group({
                    Name1: [null, null],
                });
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
                $("#AddChoices").modal("hide")
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

    formudateId:any;
    setformupdate(id:any,name:any,foodid:any){
        this.formudateId=id;
        this.optionslistid=foodid
        console.log(this.optionslistid)
        this.formEdit.controls['NameformEdit'].setValue(name);
        this.formEdit.controls['productlist'].setValue(this.optionslistid);
    }
    updateoptionslistform() {
        this.NameFormupdate = this.formEdit.value.NameformEdit;
        this.Service.updateoptionslist(this.formudateId,this.optionslistid,this.NameFormupdate).subscribe(
            data => {
                console.log(data)
                this.AlloptionsSection()
                $("#UpdateChoices").modal("hide")
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
                this.AlloptionsSection()
                $("#UpdateChoices").modal("hide")
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
    deleteoptionslistform() {
        this.Service.deleteoptionslist(this.selectedid).subscribe(
            data => {
                console.log(data)
                this.AlloptionsSection()
                $("#deleteChoices").modal("hide")
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
                this.AlloptionsSection()
                $("#deleteChoices").modal("hide")
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
