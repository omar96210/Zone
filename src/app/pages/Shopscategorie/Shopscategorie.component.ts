import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service } from '../services/service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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


    constructor(
        public translate: TranslateService,
        private fb: FormBuilder,
        public Service: Service,
        private http: HttpClient,
        private router: Router
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
statuschangeBtn: any = 0;
statuschange() {
    this.statuschangeBtn = !this.statuschangeBtn
    if (this.statuschangeBtn === true) {
        this.statuschangeBtn = 1
    } else if (this.statuschangeBtn === false) {
        this.statuschangeBtn = 0
    }
    console.log(this.statuschangeBtn)
}
statuschangeupdateBtn: any = 0;
statuschangeupdate() {
    this.statuschangeupdateBtn = !this.statuschangeupdateBtn
    if (this.statuschangeupdateBtn === true) {
        this.statuschangeupdateBtn = 1
    } else if (this.statuschangeupdateBtn === false) {
        this.statuschangeupdateBtn = 0
    }
    console.log(this.statuschangeupdateBtn)
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
    this.Service.Addshopcategory(this.image, this.NameForm, this.statuschangeBtn).subscribe(
        data => {
            console.log(data)
            this.Allfields()
            $("#Addshopcategories").modal("hide")
            this.image=null;
            this.form = this.fb.group({
                Name1: [null, null],
            });
            this.url=null
        },
        err => {
            console.log(err)
            this.Allfields()
            $("#Addshopcategories").modal("hide")
            this.image=null;
            this.url=null

        });
}
updateshopcategoryform() {
    this.NameFormupdate = this.formupdate.value.Nameupdate;
    this.Service.updateshopcategory(this.selectedid,this.image, this.NameFormupdate,this.statuschangeupdateBtn).subscribe(
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

        },
        err => {
            console.log(err)
            this.Allfields()
            $("#deleteshopcategories").modal("hide")


        });
}
    
}
