import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    moduleId: module.id,
    selector: 'AddAdmin-cmp',
    templateUrl: 'AddAdmin.component.html'
})

export class AddAdminComponent implements OnInit{
    selectedFile: File;
    url: any;

constructor(public translate:TranslateService){}

    ngOnInit(){
    
    }


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

      
}
