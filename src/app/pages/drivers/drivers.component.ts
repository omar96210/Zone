import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service } from '../services/service';

@Component({
    moduleId: module.id,
    selector: 'drivers-cmp',
    templateUrl: 'drivers.component.html'
})

export class driversComponent implements OnInit {

    constructor(
        public translate: TranslateService,
        public Service: Service) {

    }

    DriverSize: any;
    Driverlist: any;
    Driverdata: any;


    ngOnInit() {
        this.AllDriver()

    }

    AllDriver() {

        this.Service.GetDrivers()
            .then(data => {
                this.Driverlist = data;
                this.Driverdata = this.Driverlist.data
                console.log("Result of Driverlist List", this.Driverlist);

            })
            .catch(error => {

            }
            );
    }


}
