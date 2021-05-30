import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    moduleId: module.id,
    selector: 'Coupons-cmp',
    templateUrl: 'Coupons.component.html'
})

export class CouponsComponent implements OnInit{

constructor(public translate:TranslateService){}

    ngOnInit(){
    
    }
}
