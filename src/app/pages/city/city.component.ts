import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service } from '../services/service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'city-cmp',
    templateUrl: 'city.component.html'
})

export class cityComponent implements OnInit{
    public form!: FormGroup;
    sliderslist: any;
    slidersdata: any;

    constructor(
        public translate: TranslateService,
        private fb: FormBuilder, 
        public Service: Service
        ){

         }

    ngOnInit(){
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

}
