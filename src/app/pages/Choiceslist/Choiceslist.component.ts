import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service } from '../services/service';
import { ToastrService } from "ngx-toastr";
import { Router } from '@angular/router';
declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'Choiceslist-cmp',
    templateUrl: 'Choiceslist.component.html'
})

export class ChoiceslistComponent implements OnInit{
    paramSourceID: any;

    constructor(
        public translate: TranslateService,
        public Service: Service,
        private toastr: ToastrService,
        private router: Router

        ) {

    }

    optionslist: any;
    optionsdata: any;


    ngOnInit() {
        this.Alloptions()

    }

    Alloptions() {

        this.Service.Getoptions()
            .then(data => {
                this.optionslist = data;
                console.log("Result of optionslist List", this.optionslist);
            })
            .catch(error => {

            }
            );
    }
    changeParam(id) {
        this.paramSourceID=id;
        this.router.navigate(['/UpdateChoiceslist',this.paramSourceID]);

    }
    selectedid: any;
    saveid(id: any) {
        this.selectedid = id
    }

    deleteoptionsform() {
        this.Service.deleteoptions(this.selectedid).subscribe(
            data => {
                console.log(data)
                this.Alloptions()
                $("#deleteChoiceslist").modal("hide")
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
                this.Alloptions()
                $("#deleteChoiceslist").modal("hide")
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
