import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    moduleId: module.id,
    selector: 'Settings-cmp',
    templateUrl: 'Settings.component.html'
})

export class SettingsComponent implements OnInit{

constructor(public translate:TranslateService){}

    ngOnInit(){
    
    }
}
