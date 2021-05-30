import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    moduleId: module.id,
    selector: 'AddDrivers-cmp',
    templateUrl: 'AddDrivers.component.html'
})

export class AddDriversComponent implements OnInit{

constructor(public translate:TranslateService){}

    ngOnInit(){
    
    }
}
