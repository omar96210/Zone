import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service } from '../services/service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'AddUsers-cmp',
    templateUrl: 'AddUsers.component.html'
})

export class AddUsersComponent implements OnInit {
    selectedFile: File;
    url: any;
    public form!: FormGroup;
    NameForm: any;
    EmailForm: any;
    PhoneForm: any;
    UserRole: number;
    PassForm: any;


    constructor(
        public translate: TranslateService,
        public Service: Service,
        private fb: FormBuilder
        ){

         }

    ngOnInit() {
        this.form = this.fb.group({
            Name: [null, null],
            Email: [null, null],
            Phone: [null, null],
            Pass: [null, null],

          });
    }
    GetUserRole(event: any) {
        this.UserRole = event.target.value
        console.log(this.UserRole)
    }
    AddUserform() {
        this.NameForm = this.form.value.Name;
        this.EmailForm = this.form.value.Email;
        this.PhoneForm = this.form.value.Phone;
        this.PassForm = this.form.value.Pass;
        console.log(this.NameForm)
        console.log(this.EmailForm)
        console.log(this.PhoneForm)
        console.log(this.PassForm)
        console.log(this.selectedFile)
        console.log(this.UserRole)
        this.Service.Adduser(this.NameForm,this.EmailForm,this.PhoneForm, this.selectedFile,this.UserRole,this.PassForm).subscribe(
            data => {
        
            },
            err => {
              
            });
    }


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

}
