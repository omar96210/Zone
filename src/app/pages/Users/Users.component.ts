import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service } from '../services/service';


@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'Users.component.html'
})

export class UsersComponent implements OnInit{


    constructor(
        public translate: TranslateService,
        public Service: Service) {

    }

    Userslist: any;
    Usersdata: any;


    ngOnInit() {
        this.AllUsers()

    }

    AllUsers() {

        this.Service.GetUsers()
            .then(data => {
                this.Userslist = data;
                console.log("Result of Userslist List", this.Userslist);

            })
            .catch(error => {

            }
            );
    }
}
