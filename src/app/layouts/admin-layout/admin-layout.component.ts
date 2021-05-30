import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  currentLang1: any="ar";
  dir:any="rtl";
  constructor(public translate:TranslateService){}
  ngOnInit() { }


  ngAfterViewInit(){
    this.currentLang1=this.translate.currentLang;

}

get(){
    this.currentLang1=this.translate.currentLang;
    if(this.currentLang1==="ar")
    {
      this.dir="rtl"
    }else if(this.currentLang1==="en"){
      this.dir="ltl"

    }
}

}
